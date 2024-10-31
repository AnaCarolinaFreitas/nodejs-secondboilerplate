class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}