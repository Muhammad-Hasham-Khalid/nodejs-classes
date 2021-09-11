import express from 'express';
import cors from 'cors';
// configs
import { config } from './config';
// utils
import { accessLogger, messageLogger } from './utils/loggers';
import { connect } from './utils/db';
// routers
import { signin, signup } from './auth/controllers';
import { authenticate } from './auth/middleware';
import itemRouter from './resources/item/item.router';

export const app = express();

app.disable('x-powered-by');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(accessLogger('combined'));

// auth routes
app.post('/signin', signin);
app.post('/signup', signup);

// auth middleware
app.use('/api', authenticate);

// routes
app.use('/api/item', itemRouter);

export const startServer = async () => {
  try {
    await connect().then(() => {
      messageLogger.success('Database connected successfully');
    });
    app.listen(config.PORT, () => {
      messageLogger.info(`Serving on http://localhost:${config.PORT}/api`);
    });
  } catch (e) {
    messageLogger.error(e);
  }
};
