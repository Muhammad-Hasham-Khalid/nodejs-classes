import { v4 as uuid } from 'uuid';

function User(name = '', age = 18) {
  this.id = uuid();
  this.name = name;
  this.age = age;
}

export default User;
