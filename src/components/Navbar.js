class Navbar {
  constructor(setting, handleOpenSettingPage) {
    this._setting = setting;
    this._btnSetting = document.querySelector('.navbar__item[data-type="setting"]')
    this._handleOpenSettingPage = handleOpenSettingPage;
  }

  setEventListeners = () => {
    this._btnSetting.addEventListener('click', () => {
      this._handleOpenSettingPage();
    })
  }
}

export default Navbar
