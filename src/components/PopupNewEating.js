import Page from './Page.js';

class PopupNewEating extends Page {
  constructor(setting) {
    super(setting);
    this._form = this.page.querySelector(this.setting.popupFormSelector);
  }

  setEventListeners = () => {
    this.page.addEventListener('mousedown', (evt) => {
      // если нажатый элемент содержит класс открытого popup или кнопки закрытия, выполнить закрытие popup
      if (evt.target.classList.contains('popup_show') || evt.target.classList.contains('popup__close')) {
        this.closePage();
      }
    })
  }
}

export default PopupNewEating
