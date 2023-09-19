import Page from './Page.js';

class Form extends Page {
  constructor(setting) {
    super(setting);
    this._form = this._page.querySelector(this.setting.formSelector);
    this._allGenderBtns = this._form.querySelectorAll(this.setting.btnGenderSelector);
    this._allActivityBtns = this._form.querySelectorAll(this.setting.btnActivitySelector);
    this._allInputs = this._form.querySelectorAll(this.setting.inputSelector);
    this._btnSubmit = this._form.querySelector(this.setting.btnSubmitSelector);
  }

  // переключение активной кнопки выбора пола
  toggleGenderBtn(element) {
    this._allGenderBtns.forEach(item => {
      item.classList.remove(this.setting.btnInactiveClass);
    });

    element.classList.add(this.setting.btnInactiveClass);
  }

  // переключение активной кнопки выбора типа активности
  toggleActivityBtn(element) {
    this._allActivityBtns.forEach(item => {
      item.classList.remove(this.setting.btnInactiveClass);
    });

    element.classList.add(this.setting.btnInactiveClass);
  }
}

export default Form
