# express-demo

Simple Express.js API with Hello World endpoint and OpenAPI spec

## Quick Start

```bash
# Clone the repository
git clone git@github.com:abhishc/temp.git express-demo
cd express-demo

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev

# Test endpoints
curl http://localhost:3000/
curl http://localhost:3000/health
curl http://localhost:3000/api/hello
```

## Prerequisites

- **Node.js**: Version 18+ recommended (required for `--watch` support in development mode)
- **npm**: Comes with Node.js

## Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` to customize configuration if needed (see [Environment Configuration](#environment-configuration) below).

## Environment Configuration

The application uses the following environment variables:

| Variable | Description | Valid Values | Default |
|----------|-------------|--------------|---------|
| `PORT` | Port number for the server to listen on | Positive integer | `3000` |
| `HOST` | Host address to bind the server to | IP address or hostname | `0.0.0.0` |
| `NODE_ENV` | Node environment mode | `development`, `test`, `production` | `development` |

**Example `.env` file:**
```env
PORT=3000
HOST=0.0.0.0
NODE_ENV=development
```

**Notes:**
- If `PORT` is set to an invalid value (non-integer or ≤ 0), the server falls back to port 3000 with a warning.
- If `NODE_ENV` is set to an invalid value, it defaults to `development`.
- The `.env` file is automatically loaded by `dotenv` when the application starts.

## Run Commands

### Development Mode

```bash
npm run dev
```

- Sets `NODE_ENV=development`
- Uses Node.js built-in `--watch` for automatic reloading on file changes
- Server runs on `http://localhost:3000` (or configured `HOST:PORT`)

### Production Mode

```bash
npm start
```

- Runs the server without setting `NODE_ENV` explicitly
- Server runs on configured `HOST:PORT` (default: `0.0.0.0:3000`)

Or explicitly set production environment:

```bash
npm run start:prod
```

- Sets `NODE_ENV=production`
- Server runs on configured `HOST:PORT` (default: `0.0.0.0:3000`)

### Testing

```bash
npm test
```

- Runs Jest test suite with `--runInBand` flag
- Uses Node.js test environment

## API Endpoints

### GET /

Root endpoint returning a plain text hello world message.

**Request:**
```bash
curl http://localhost:3000/
```

**Response:**
- **Status Code:** `200 OK`
- **Content-Type:** `text/plain; charset=utf-8`
- **Body:**
  ```
  Hello, World!
  ```

### GET /health

Health check endpoint to verify service status.

**Request:**
```bash
curl http://localhost:3000/health
```

**Response:**
- **Status Code:** `200 OK`
- **Content-Type:** `application/json; charset=utf-8`
- **Body:**
  ```json
  {
    "status": "ok",
    "service": "express-demo"
  }
  ```

### GET /api/hello

Hello world message endpoint returning JSON.

**Request:**
```bash
curl http://localhost:3000/api/hello
```

**Response:**
- **Status Code:** `200 OK`
- **Content-Type:** `application/json; charset=utf-8`
- **Body:**
  ```json
  {
    "message": "Hello, World!"
  }
  ```

## API Documentation

See [openapi.yaml](./openapi.yaml) for the complete API specification.

## Troubleshooting

### Port Already in Use

If you see an error like `EADDRINUSE: address already in use`, the port is already taken:

```bash
# Find process using port 3000
lsof -i :3000

# Or use a different port
PORT=3001 npm run dev
```

### Environment Variables Not Loading

- Ensure `.env` file exists in the project root
- Check that variable names match exactly (case-sensitive)
- Verify `.env` file syntax (no spaces around `=`)

### Node Version Mismatch

If you encounter issues with `--watch` flag:

```bash
# Check Node.js version
node --version

# Should be 18.0.0 or higher
```

### Server Not Starting

- Verify all dependencies are installed: `npm install`
- Check for syntax errors in configuration files
- Review server logs for specific error messages

## License

ISC - see [LICENSE](./LICENSE) file for details.
