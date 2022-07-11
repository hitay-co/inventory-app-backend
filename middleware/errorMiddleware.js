const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    res.status(400);
  }
  if (err.name === 'CastError') {
    res.status(400);
  } else {
    const statusCode = res.statusCode || 500;
    res.status(statusCode);
  }

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' && err.stack,
  });
};

module.exports = { errorHandler };
