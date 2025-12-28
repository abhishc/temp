// Health check handler
const healthHandler = (req, res) => {
  res.json({
    status: 'ok',
    service: 'express-demo'
  });
};

module.exports = {
  healthHandler
};
