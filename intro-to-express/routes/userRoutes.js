import controllers from '../controllers/userControllers.js';
import { Router } from 'express';

const router = Router();

// HTTP verbs -> GET, POST, PUT, PATCH, DELETE

// router.get('/', controllers.getUsers);
// router.post('/', controllers.addUser);

router.route('/').get(controllers.getUsers).post(controllers.addUser);

router
  .route('/:id')
  .get(controllers.getUser)
  .put(controllers.updateUser)
  .delete(controllers.deleteUser);

export default router;
