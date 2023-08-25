const cors = require('cors');

const allowedOrigins = [
    'http://localhost:3000/',
    'https://pratham-jaiswal.onrender.com',
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