# Express Demo

A simple Express.js application with hello world API endpoints.

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
