import Page from './Page.js';

class Popup extends Page {
  constructor(setting) {
    super(setting);
    this._btnClose = this._page.querySelector('.popup__close');
  }

  setEventListeners = () => {
    this._btnClose.addEventListener('click', () => {
      this.closePage();
    })
  }
}

export default Popup
