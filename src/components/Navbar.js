class Navbar {
  constructor(setting, handleCloseAllpage, handleOpenSettingPage, handleOpenProductPage) {
    this._setting = setting;
    this._btnMain = document.querySelector(this._setting.btnMainSelector);
    this._btnSetting = document.querySelector(this._setting.btnSettingSelector);
    this._btnProduct = document.querySelector(this._setting.btnProductsSelector);
    this._handleCloseAllpage = handleCloseAllpage;
    this._handleOpenSettingPage = handleOpenSettingPage;
    this._handleOpenProductPage = handleOpenProductPage;
  }

  setEventListeners = () => {
    this._btnMain.addEventListener('click', () => {
      this._handleCloseAllpage();

    });

    this._btnSetting.addEventListener('click', () => {
      this._handleCloseAllpage();

      this._handleOpenSettingPage();
    });

    this._btnProduct.addEventListener('click', () => {
      this._handleCloseAllpage();

      this._handleOpenProductPage();
    })
  }
}

export default Navbar
