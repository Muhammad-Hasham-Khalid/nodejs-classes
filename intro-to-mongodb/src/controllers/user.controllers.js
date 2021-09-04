import { User } from '../models/user.model.js';

const getUsers = async (request, response) => {
  try {
    const users = await User.find();
    return response.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return response.status(200).json({
      success: false,
      error,
    });
  }
};

const getUser = (request, response) => {
  // assignment
};

const addUser = async (request, response) => {
  const { name, age } = request.body;
  const user = await User.create({
    name,
    age,
  });
  return response.status(201).json({
    success: true,
    data: user,
  });
};

const deleteUser = async (request, response) => {
  const { id } = request.params;
  const deletedUser = await User.findByIdAndRemove(id);
  return response.status(200).json({
    success: true,
    data: deletedUser,
  });
};

const updateUser = (request, response) => {
  // assignment : try
};

export default {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
};
