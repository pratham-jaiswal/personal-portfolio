const cors = require('cors');
require("dotenv").config();

const allowedUri = process.env.ALLOWED_URI;
const allowedOrigins = [
  allowedUri,
  "https://pratham-jaiswal.onrender.com/"
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