import { Item } from '../models/item.model.js';
import { User } from '../models/user.model.js';

const getItems = async (request, response) => {
  const { userId } = request.params;
  const items = await Item.find().exec();
  return response.status(200).json({
    success: true,
    data: items,
  });
};

const getItem = async (request, response) => {};

const addItem = async (request, response) => {
  const data = request.body;
  const user = await User.findById(data.createdBy).exec();
  const item = new Item(data);
  if (error) {
    return response.status(400).json({
      success: false,
      error,
    });
  }
  return response.status(200).json({
    success: true,
    data: item,
  });
};

const deleteItem = async (request, response) => {};

const updateItem = async (request, response) => {};

export default {
  getItems: getItems,
  getItem: getItem,
  addItem: addItem,
  deleteItem: deleteItem,
  updateItem: updateItem,
};
