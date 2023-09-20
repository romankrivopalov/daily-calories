import Page from './Page.js';

class PopupNewEating extends Page {
  constructor(setting) {
    super(setting);
    this._form = this.page.querySelector(this.setting.popupFormSelector);
    this._btnClose = this._form.querySelector(this.setting.popupBtnCloseSelector);
  }

  setEventListeners = () => {
    this._btnClose.addEventListener('click', () => {
      this.closePage();
    });
  }
}

export default PopupNewEating
