# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=development
COPY package*.json ./
RUN npm ci
COPY . .
# Run build if a build script exists
RUN if [ -f package.json ] && grep -q "\"build\":" package.json; then npm run build; else echo "No build script found; skipping build"; fi
# Prune dev dependencies to keep only production deps
RUN npm prune --omit=dev

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Allow overriding the health endpoint path
ENV HEALTHCHECK_PATH=/health
# Proper signal handling + healthcheck tool
RUN apk add --no-cache tini curl
# Copy production deps and app artifacts
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/. ./
# Use non-root user (node exists in base image)
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD curl -fsS http://localhost:${PORT}${HEALTHCHECK_PATH} || exit 1
ENTRYPOINT ["/sbin/tini","--"]
CMD ["npm","start"]
