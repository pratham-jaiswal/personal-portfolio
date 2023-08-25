const cors = require('cors');
require("dotenv").config();

const allowedOrigins = [
  process.env.ALLOWED_URI
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.exports = cors(corsOptions);