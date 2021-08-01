import express from 'express';
import http from 'http';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';

// create a base app
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/users', userRoutes);

// Get port from environment and store in Express.
const PORT = process.env.PORT || 5000;

// Create HTTP server.
const server = http.createServer(app);
server.listen(PORT);
