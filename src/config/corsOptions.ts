import { CorsOptions } from 'cors';

const allowedOrigins = ['http://localhost:3000'];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    //remove || !origin in deployment
    if (!origin) {
      callback(null, true);
      // callback(new Error('Null origin not allowed by CORS'));
    } else if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

export { corsOptions };
