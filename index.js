const app = require('./src/app');
const { port, host } = require('./src/config');

const server = app.listen(port, host, () => {
  console.log(`[startup] Server listening at http://${host}:${port}`);
});

server.on('error', (err) => {
  console.error('[server:error]', err);
  process.exit(1);
});

function shutdown(signal) {
  console.log(`[shutdown] Received ${signal}. Closing server...`);
  server.close((err) => {
    if (err) {
      console.error('[shutdown:error]', err);
      process.exit(1);
    }
    console.log('[shutdown] Server closed. Goodbye.');
    process.exit(0);
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
