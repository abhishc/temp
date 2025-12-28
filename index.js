const app = require('./src/app');
const config = require('./src/config');

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
