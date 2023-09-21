import Page from './Page.js';

class MainPage extends Page {
  constructor(setting, handleNewPopup) {
    super(setting);
    this._btnAddProduct = this.page.querySelector(this.setting.btnAddEatingSelector);
    this._handleNewPopup = handleNewPopup;
  }

  setNewEating = (data) => {
    console.log(data)
  }

  setEventListeners = () => {
    this._openPopup = this._handleNewPopup();

    this._btnAddProduct.addEventListener('click', () => {
      this._openPopup();
    })
  }
}

export default MainPage
