class Navbar {
  constructor(setting, handleOpenSettingPage, handleOpenProductPage) {
    this._setting = setting;
    this._btnSetting = document.querySelector('.navbar__item[data-type="setting"]');
    this._btnProduct = document.querySelector('.navbar__item[data-type="products"]');
    this._handleOpenSettingPage = handleOpenSettingPage;
    this._handleOpenProductPage = handleOpenProductPage;
  }

  setEventListeners = () => {
    this._btnSetting.addEventListener('click', () => {
      this._handleOpenSettingPage();
    });

    this._btnProduct.addEventListener('click', () => {
      this._handleOpenProductPage();
    })
  }
}

export default Navbar
