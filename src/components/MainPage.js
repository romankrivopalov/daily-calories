import Page from './Page.js';

class MainPage extends Page {
  constructor(setting, handleNewPopup, handleNewEating) {
    super(setting);
    this._btnAddProduct = this.page.querySelector(this.setting.btnAddEatingSelector);
    this._eatingContainer = this.page.querySelector('.main__list');
    this._handleNewPopup = handleNewPopup;
    this._handleNewEating = handleNewEating;
  }

  setNewEating = (data) => {
    this._eatingContainer.prepend(this._handleNewEating(data));
  }

  setEventListeners = () => {
    this._openPopup = this._handleNewPopup();

    this._btnAddProduct.addEventListener('click', () => {
      this._openPopup();
    })
  }
}

export default MainPage
