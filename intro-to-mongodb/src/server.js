import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { connect } from './db/connection.js';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', userRoutes);

// config
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

export const startServer = async () => {
  await connect();
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};
