import controllers from '../controllers/userControllers.js';
import { Router } from 'express';
import middleware from '../middlewares/auth.js';

const router = Router();

// HTTP verbs -> GET, POST, PUT, PATCH, DELETE

// router.get('/', controllers.getUsers);
// router.post('/', controllers.addUser);

// router.use(middleware);
// will run on all the requests handled by this router

router
  .route('/')
  .get(middleware, controllers.getUsers)
  // middleware will work only on this request
  .post(controllers.addUser);

router
  .route('/:id')
  .get(controllers.getUser)
  .put(controllers.updateUser)
  .delete(controllers.deleteUser);

export default router;
