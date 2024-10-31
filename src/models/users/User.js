class User {
  constructor( name, email, password) {
    this.id = this.generateid();
    this.name = name;   
    this.email = email;
    this.password = password;
  }

  generateid() {
    return Math.floor(Math.random() * 999 + 1);
  }
}

export default User;    