import controllers from '../controllers/item.controllers.js';
import { Router } from 'express';

const router = Router();

router.route('/:userId').get(controllers.getItems).post(controllers.addItem);

router
  .route('/:id/:userId')
  .get(controllers.getItem)
  .put(controllers.updateItem)
  .delete(controllers.deleteItem);

export default router;
