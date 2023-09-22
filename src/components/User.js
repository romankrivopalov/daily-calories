class User {
  constructor(setting) {
    this._setting = setting;
  }

  getUserData = () => {
    return this._userData;
  }

  setUserData = (data) => {
    this._userData = data
  }
}

export default User;
