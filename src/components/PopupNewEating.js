import Page from './Page.js';

class PopupNewEating extends Page {
  constructor(setting, handleGetAllProducts) {
    super(setting);
    this._form = this.page.querySelector(this.setting.popupFormSelector);
    this._productContainer = this.page.querySelector('#eating');
    this._handleGetAllProducts = handleGetAllProducts;
  }

  _clearContainer = () => {
    this._productContainer.innerHTML = '';
  }

  // тк в проекте уже есть метод создания элементов
  // через template, решил использовать createElement
  _generateProduct = ({ name, calories}) => {
    const product = document.createElement('li');
    product.className = 'eating__item';

    const productCheckbox = document.createElement('input');
    productCheckbox.className = 'eating__checkbox';
    productCheckbox.type = 'checkbox';
    productCheckbox.id = `${name}-${calories}`;

    const productCheckboxDecor = document.createElement('label');
    productCheckboxDecor.className = 'eating__decor';

    const productText = document.createElement('p');
    productText.className = 'eating__text';
    productText.textContent = name

    const productInputCalories = document.createElement('input');
    productInputCalories.className = 'input input_type_eating';
    productInputCalories.type = 'number';

    product.prepend(productCheckbox, productCheckboxDecor, productText, productInputCalories)

    return product;
  }

  _setProduct = (data) => {
    this._productContainer.prepend(this._generateProduct(data));
  }

  openPage() {
    this._clearContainer()

    const allProducts = this._handleGetAllProducts();

    if (allProducts.length) {
      allProducts.forEach(product => this._setProduct(product))
    }

    super.openPage();
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
