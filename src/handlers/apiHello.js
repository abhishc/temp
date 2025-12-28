// API Hello handler - returns JSON greeting
const apiHelloHandler = (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
};

module.exports = {
  apiHelloHandler
};
