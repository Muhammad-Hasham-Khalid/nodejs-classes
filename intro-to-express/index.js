import express from 'express';
import http from 'http';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';

import middleware from './middlewares/auth.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

// create a base app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// app.use(middleware); // will run on every request

// routes
app.use('/api/users', userRoutes);

// Get port from environment and store in Express.
const PORT = process.env.PORT;

// Create HTTP server.
const server = http.createServer(app);
server.listen(PORT);
