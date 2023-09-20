import Page from './Page.js';

class PopupNewProduct extends Page {
  constructor(setting, handleSetProduct) {
    super(setting);
    this._form = this.page.querySelector(this.setting.popupFormSelector);
    this._btnClose = this._form.querySelector(this.setting.popupBtnCloseSelector);
    this._allInputs = this._form.querySelectorAll(this.setting.popupInputSelector);
    this._btnSubmit = this._form.querySelector(this.setting.popupBtnSubmitSelector);
    this._productData = {name: null, calories: null};
    this._handleSetProduct = handleSetProduct;
  }

  // очистка полей формы
  _resetForm = () => {
    this._allInputs.forEach(input => input.value = '');
  }

  _checkDataProduct = () => {
    // проверка наличия всех значений ключей объекта
    return Object.values(this._productData).every(item => item);
  }

  // проверка валидности инпута
  _checkValidityInput = (input) => {
    if (input.validity.valid) {
      this._productData[input.getAttribute(this.setting.nameAttributeDataProduct)] = input.value;

      // если поле инпута валидно и есть значения
      if (this._checkDataProduct()) this._btnSubmit.disabled = false;
    } else {
      this._btnSubmit.disabled = true;
    }
  }

  setEventListeners = () => {
    this._btnClose.addEventListener('click', () => {
      this.closePage();
    });

    this._allInputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidityInput(input);
      })
    });

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      // при срабатывании события submit отправляем в метод установки продукта, глубокую копию текущего продукта
      this._handleSetProduct(structuredClone(this._productData));
      this.closePage();

      this._resetForm();
    })
  }
}

export default PopupNewProduct
