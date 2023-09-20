class Navbar {
  constructor(setting, handleCloseAllpage, handleOpenSettingPage, handleOpenProductPage) {
    this._setting = setting;
    this._btnMain = document.querySelector(this._setting.btnMainSelector);
    this._btnSetting = document.querySelector(this._setting.btnSettingSelector);
    this._btnProduct = document.querySelector(this._setting.btnProductsSelector);
    this._handleCloseAllpage = handleCloseAllpage;
    this._handleOpenSettingPage = handleOpenSettingPage;
    this._handleOpenProductPage = handleOpenProductPage;
    this._allBtn = [this._btnMain, this._btnSetting, this._btnProduct]
  }

  _removeActiveClasses = () => {
    this._allBtn.forEach(btn => btn.classList.remove(this._setting.itemActiveClass));
  }

  setEventListeners = () => {
    this._btnMain.addEventListener('click', () => {
      this._handleCloseAllpage();

      this._removeActiveClasses();
      this._btnMain.classList.add(this._setting.itemActiveClass);
    });

    this._btnSetting.addEventListener('click', () => {
      this._handleCloseAllpage();

      this._handleOpenSettingPage();
      this._removeActiveClasses();
      this._btnSetting.classList.add(this._setting.itemActiveClass);
    });

    this._btnProduct.addEventListener('click', () => {
      this._handleCloseAllpage();

      this._handleOpenProductPage();
      this._removeActiveClasses();
      this._btnProduct.classList.add(this._setting.itemActiveClass);
    })
  }
}

export default Navbar
