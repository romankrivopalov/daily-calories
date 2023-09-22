import Page from './Page.js';

class PopupNewEating extends Page {
  constructor(setting, handleGetAllProducts, handleSetNewEating) {
    super(setting);
    this._form = this.page.querySelector(this.setting.popupFormSelector);
    this._btnSubmit = this.page.querySelector('#popup-btn-submit');
    this._productContainer = this.page.querySelector('#eating');
    this._handleGetAllProducts = handleGetAllProducts;
    this._handleSetNewEating = handleSetNewEating;
    this._allProductsElements = [];
    this._allCheckboxs = [];
    this._allInputs = [];
  }

  // очистка данных продукта
  _clearProductsData = () => {
    this._productContainer.innerHTML = '';
    this._allProductsElements = [];
    this._allCheckboxs = [];
    this._allInputs = [];
  }

  // проверка на количество заполненных инпутов
  _checkInputs = () => {
    let count = 0;

    for (let i = 0; i < this._allInputs.length; i++) {
      if (this._allInputs[i].value.length) count++
    }

    return count;
  }

  // проверка на количество включенных чекбоксов
  _checkCheckboxs = () => {
    let count = 0;

    for (let i = 0; i < this._allCheckboxs.length; i++) {
      if (this._allCheckboxs[i].checked) count++
    }

    return count;
  }

  // тк в проекте уже есть метод создания элементов
  // через template, решил использовать createElement
  _generateProduct = ({ name, calories}) => {
    const product = document.createElement('li');
    product.className = 'eating__item';
    product.setAttribute('data-name', `${name}`);
    product.setAttribute('data-calories', `${calories}`);

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
    productInputCalories.placeholder =  "вес в гр.";
    productInputCalories.disabled = true;

    this._allProductsElements.push(product);
    this._allCheckboxs.push(productCheckbox);
    this._allInputs.push(productInputCalories);

    product.prepend(productCheckbox, productCheckboxDecor, productText, productInputCalories);

    // установка обработчика на нажатие чекбокса
    productCheckboxDecor.addEventListener('click', () => {
      // если чекбокс не нажат, меняем его значение, включаем инпут и кнопку submit
      if (!productCheckbox.checked) {
        productCheckbox.checked = true;
        productInputCalories.disabled = false;

        // отключение кнопки submit
        this._btnSubmit.disabled = true;
      } else {
        productCheckbox.checked = false;
        productInputCalories.disabled = true;
        productInputCalories.value = '';

        // проверка есть ли ещё включенные продукты
        if (this._checkCheckboxs() === this._checkInputs()) {
          this._btnSubmit.disabled = false;
        } else {
          this._btnSubmit.disabled = true;
        }
      }
    });

    // установка обработчика на ввод значения в input
    productInputCalories.addEventListener('input', () => {
      if (this._checkCheckboxs() === this._checkInputs()) {
        this._btnSubmit.disabled = false;
      } else {
        this._btnSubmit.disabled = true;
      }
    })

    return product;
  }

  // установка объекта в контейнер
  _setProduct = (data, index) => {
    this._productContainer.prepend(this._generateProduct(data, index));
  }

  // переопределение метода
  openPage() {
    this._clearProductsData();

    const allProducts = this._handleGetAllProducts();

    if (allProducts.length) {
      allProducts.forEach((product, i) => this._setProduct(product, i))
    }

    super.openPage();
  }

  setEventListeners = () => {
    this.page.addEventListener('mousedown', (e) => {
      // если нажатый элемент содержит класс открытого popup или кнопки закрытия, выполнить закрытие popup
      if (e.target.classList.contains('popup_show') || e.target.classList.contains('popup__close')) {
        this.closePage();
      }
    });

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      // выбрать все элементы с заполненными инпутами
      // тк если чекбокс не активен, инпут будет выключен
      const arr = this._allInputs.map(input => !!input.value);
      // собрать объект по индексу заполненного инпута
      const res = this._allProductsElements.map((item, i) => {
        if (arr[i]) return {
          name: item.getAttribute('data-name'),
          calories: item.getAttribute('data-calories'),
          weight: this._allInputs[i].value
        }
      })

      // вызов метода и передача массива
      this._handleSetNewEating(res.filter(product => product));

      this.closePage();
    })
  }
}

export default PopupNewEating
