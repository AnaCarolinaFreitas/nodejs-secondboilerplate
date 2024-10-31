import User from "./User.js";

class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  addUser(name, email, password) {
    const newuser = new User(name, email, password);
    this.users.push(newuser);

    return newuser;
  }

  getUserById(id) {
    const user = this.users.find((u) => u.id == id);

    if (!user) {
        return null;
    }

    return user;

  }
}

export default UsersRepository;