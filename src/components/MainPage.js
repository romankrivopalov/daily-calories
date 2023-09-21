import Page from './Page.js';

class MainPage extends Page {
  constructor(setting, handleNewPopup, handleNewEating) {
    super(setting);
    this._btnAddProduct = this.page.querySelector(this.setting.btnAddEatingSelector);
    this._eatingContainer = this.page.querySelector('.main__list');
    this._handleNewPopup = handleNewPopup;
    this._handleNewEating = handleNewEating;
  }

  _clearContainer = () => {
    this._eatingContainer.innerHTML = '';
  }

  setNewEating = (data) => {
    const eating = this._handleNewEating(data);
    this._eatingContainer.prepend(eating);

    const date = new Date();

    localStorage.setItem('eating', JSON.stringify({
      date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
      data: data,
    }))
  }

  setEventListeners = () => {
    this._openPopup = this._handleNewPopup();

    this._btnAddProduct.addEventListener('click', () => {
      this._openPopup();
    })
  }

  openPage() {
    super.openPage();

    const data = JSON.parse(localStorage.getItem('eating'));

    if (data) {
      const date = new Date();

      // если дата не совпадает с текущей, очистка контейнера и локального хранилища
      if (`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}` === data.date) {
        this._clearContainer();

        const eating = this._handleNewEating(data.data);
        this._eatingContainer.prepend(eating);
      } else {
        this._clearContainer();
        localStorage.removeItem('eating');
      }
    }
  }
}

export default MainPage
