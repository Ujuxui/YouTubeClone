const logger = (req, res, next) => {
  res.on("finish", () => {
    console.log(
      `[${new Date().toString()}] ${req.method} ${req.originalUrl} - ${
        res.statusCode
      }`
    );
  });
  next();
};

export default logger;
