import Page from './Page.js';

class Form extends Page {
  constructor(setting) {
    super(setting);
    this._form = this._page.querySelector(this._setting.formSelector);
    this._allGenderBtns = this._form.querySelectorAll(this._setting.btnGenderSelector);
    this._allActivityBtns = this._form.querySelectorAll(this._setting.btnActivitySelector);
    this._allInputs = this._form.querySelectorAll(this._setting.inputSelector);
    this._btnSubmit = this._form.querySelector(this._setting.btnSubmitSelector);
  }

  // переключение активной кнопки выбора пола
  toggleGenderBtn(element) {
    this._allGenderBtns.forEach(item => {
      item.classList.remove(this._setting.btnInactiveClass);
    });

    element.classList.add(this._setting.btnInactiveClass);
  }

  // переключение активной кнопки выбора типа активности
  toggleActivityBtn(element) {
    this._allActivityBtns.forEach(item => {
      item.classList.remove(this._setting.btnInactiveClass);
    });

    element.classList.add(this._setting.btnInactiveClass);
  }
}

export default Form
