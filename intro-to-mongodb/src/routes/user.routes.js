import controllers from '../controllers/user.controllers.js';
import { Router } from 'express';

const router = Router();

router.route('/').get(controllers.getUsers).post(controllers.addUser);

router
  .route('/:id')
  .get(controllers.getUser)
  .put(controllers.updateUser)
  .delete(controllers.deleteUser);

export default router;
