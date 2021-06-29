const moment = require("moment");

// Middleware
// It is like additional functionality on each request
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment().format()}`);
  next();
};

module.exports = logger;
