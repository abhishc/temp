# temp

Simple Express.js API with Hello World endpoint and OpenAPI spec

## Prerequisites

- Node.js LTS

## Installation

```bash
npm install
```

## Running the server

### Development

Start the server in development mode with auto-reload:

```bash
npm run dev
```

This command:
- Sets `NODE_ENV=development`
- Uses Node.js built-in `--watch` for automatic reloading on file changes (requires Node.js 18+)
- Loads environment variables from `.env` file if present (via `dotenv`)

### Production

Start the server in production mode:

```bash
npm start
```

Or explicitly set production environment:

```bash
npm run start:prod
```

**Prerequisites:** Node.js 18+ recommended (for `--watch` support in development mode)

## Usage

Then visit `http://localhost:3000/` or use the hello world endpoint:

```bash
curl http://localhost:3000/
```

## API Documentation

See [openapi.yaml](./openapi.yaml) for the complete API specification.

## API Contract

### GET /health

Health check endpoint to verify service status.

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

**Example:**
```bash
curl http://localhost:3000/health
```

### GET /api/hello

Hello world message endpoint.

**Response:**
- **Status Code:** `200 OK`
- **Content-Type:** `application/json; charset=utf-8`
- **Body:**
  ```json
  {
    "message": "Hello, World!"
  }
  ```

**Example:**
```bash
curl http://localhost:3000/api/hello
```

## Configuration

- **Port:** 3000 by default, configurable via `PORT` environment variable
- **Response Format:** JSON only
- **Authentication:** Not required

## License

ISC - see [LICENSE](./LICENSE) file for details.
