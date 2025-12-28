// Hello World handler - preserves existing behavior
const helloHandler = (req, res) => {
  res.type('text/plain').send('Hello, World!');
};

module.exports = {
  helloHandler
};
