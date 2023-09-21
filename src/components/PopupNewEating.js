import Page from './Page.js';

class PopupNewEating extends Page {
  constructor(setting, handleGetAllProducts) {
    super(setting);
    this._form = this.page.querySelector(this.setting.popupFormSelector);
    this._btnSubmit = this.page.querySelector('#popup-btn-submit');
    this._productContainer = this.page.querySelector('#eating');
    this._handleGetAllProducts = handleGetAllProducts;
    this._allProductsElements = [];
    this._allCheckboxs = [];
  }

  _clearProductsData = () => {
    this._productContainer.innerHTML = '';
    this._allProductsElements = [];
    this._allCheckboxs = [];
  }

  _checkValidityItems = () => {
    let isChecked = false;

    for (let i = 0; i < this._allCheckboxs.length; i++) {
      if (this._allCheckboxs[i].checked) {
        isChecked = true;
        i = this._allCheckboxs.length
      };
    }

    return isChecked;
  }

  // тк в проекте уже есть метод создания элементов
  // через template, решил использовать createElement
  _generateProduct = ({ name, calories}, index) => {
    const product = document.createElement('li');
    product.className = 'eating__item';
    product.setAttribute('calories', `${index}-${calories}`);

    const productCheckbox = document.createElement('input');
    productCheckbox.className = 'eating__checkbox';
    productCheckbox.type = 'checkbox';

    const productCheckboxDecor = document.createElement('label');
    productCheckboxDecor.className = 'eating__decor';

    const productText = document.createElement('p');
    productText.className = 'eating__text';
    productText.textContent = name

    const productInputCalories = document.createElement('input');
    productInputCalories.className = 'input input_type_eating';
    productInputCalories.type = 'number';
    productInputCalories.disabled = true;

    this._allCheckboxs.push(productCheckbox);
    this._allProductsElements.push(product);

    product.prepend(productCheckbox, productCheckboxDecor, productText, productInputCalories);

    // установка обработчика
    productCheckboxDecor.addEventListener('click', () => {
      // если чекбокс не нажат, меняем его значение, включаем инпут и кнопку submit
      if (!productCheckbox.checked) {
        productCheckbox.checked = true;
        productInputCalories.disabled = false;

        this._btnSubmit.disabled = false;
      } else {
        productCheckbox.checked = false;
        productInputCalories.disabled = true;
        productInputCalories.value = '';

        // проверка есть ли ещё включенные продукты
        if (this._checkValidityItems()) {
          this._btnSubmit.disabled = false;
        } else {
          this._btnSubmit.disabled = true;
        }
      }
    });

    return product;
  }

  _setProduct = (data, index) => {
    this._productContainer.prepend(this._generateProduct(data, index));
  }

  openPage() {
    this._clearProductsData();

    const allProducts = this._handleGetAllProducts();

    if (allProducts.length) {
      allProducts.forEach((product, i) => this._setProduct(product, i))
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
