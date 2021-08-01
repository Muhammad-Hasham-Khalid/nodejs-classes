import User from '../models/userModel.js';

let data = [];

// CRUD -> Create, Read, Update, Delete
const getUsers = (request, response) => {
  return response.status(200).json(data);
};

const getUser = (request, response) => {
  const { id } = request.params;
  const foundUser = data.find(user => user.id === id);
  return response.status(200).json(foundUser);
};

const addUser = (request, response) => {
  const { name, age } = request.body;
  const user = new User(name, age);
  data.push(user);
  return response.status(201).json(user);
};

const deleteUser = (request, response) => {
  const { id } = request.params;
  data = data.filter(user => user.id !== id);
  return response.json(data);
};

const updateUser = (request, response) => {
  const { id } = request.params;
  const updated = request.body;
  let updatedUser = {};
  data = data.map(user => {
    if (user.id === id) {
      updatedUser = { ...user, ...updated };
      return updatedUser;
    }
    return user;
  });
  return response.json(updatedUser);
};

export default {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
};
