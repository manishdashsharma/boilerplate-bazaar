import mongoose from 'mongoose';
import { RateLimiterMongo } from 'rate-limiter-flexible';
import config from './config.js';

let rateLimiterMongo = null;

const DURATION = 60;   // 60 seconds
const POINTS = 10;     // 10 requests per 60 seconds

// Connect to MongoDB using Mongoose
const connectToMongoDB = async () => {
  try {
    const connection =  await mongoose.connect(config.DATABASE_URL);
    return connection.connection;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit if connection fails
  }
};

// Initialize rate limiter with Mongoose connection
export const initRateLimiter = async () => {
  const mongooseConnection = await connectToMongoDB();

  // Create RateLimiterMongo instance using the Mongoose connection
  rateLimiterMongo = new RateLimiterMongo({
    storeClient: mongooseConnection, // Use the Mongoose connection
    points: POINTS,
    duration: DURATION,
  });
};
