class Start {
  constructor(setting, handleSetUserData) {
    this._setting = setting;
    this._userData = this._setting.userData;
    this._startWindow = document.querySelector(this._setting.startWindowSelector);
    this._form = this._startWindow.querySelector(this._setting.formSelector);
    this._allGenderBtns = this._form.querySelectorAll(this._setting.btnGenderSelector);
    this._allActivityBtns = this._form.querySelectorAll(this._setting.btnActivitySelector);
    this._allInputs = this._form.querySelectorAll(this._setting.inputSelector);
    this._btnSubmit = this._form.querySelector(this._setting.btnSubmitSelector);
    this._handleSetUserData = handleSetUserData;
  }

  _closeStartWindow = () => {
    this._startWindow.classList.add(this._setting.startWindowHideClass);
  }

  // проверка наличия значений у всех полей объекта
  _checkAvailableAllData = () => {
    return Object.values(this._userData).every(item => item)
  }

  // установка значений в объект пользователя
  _setUserData = (attr, value) => {
    if (attr && value) {
      this._userData[attr] = value;

      if (this._checkAvailableAllData()) {
        this._btnSubmit.disabled = false;

        localStorage.setItem('data', JSON.stringify(this._userData));
      } else {
        this._btnSubmit.disabled = true;
      }
    }
  }

  // переключение активной кнопки выбора типа активности
  _toggleActiveActivityBtn = (element) => {
    this._allActivityBtns.forEach(item => {
      item.classList.remove(this._setting.btnInactiveClass);
    });

    element.classList.add(this._setting.btnInactiveClass);
    this._setUserData(
      element.getAttribute(this._setting.nameAttributeDataType),
      element.getAttribute(this._setting.nameAttributeDataActivity)
    );
  }

  // проверка валидности поля инпута и установка значения
  _checkValidityInput = (input) => {
    if (input.validity.valid) {
      this._setUserData(input.getAttribute(this._setting.nameAttributeDataUser), +input.value);
    } else {
      this._setUserData(input.getAttribute(this._setting.nameAttributeDataUser), null);
    }
  }

  // переключение активной кнопки выбора пола
  _toggleActiveGenderBtn = (element) => {
    this._allGenderBtns.forEach(item => {
      item.classList.remove(this._setting.btnInactiveClass);
    });

    element.classList.add(this._setting.btnInactiveClass);
    this._setUserData(
      element.getAttribute(this._setting.nameAttributeDataType),
      element.getAttribute(this._setting.nameAttributeDataGender)
    );
  }

  _setEventListeners = () => {
    this._allGenderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this._toggleActiveGenderBtn(btn);
      });
    });

    this._allInputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkValidityInput(inputElement);
      });
    });

    this._allActivityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this._toggleActiveActivityBtn(btn);
      });
    });

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      // если все данные у объекта есть, отправляем их
      if (this._checkAvailableAllData()) {
        this._handleSetUserData(this._userData);

        this._closeStartWindow();
      }
    })
  }

  setData = () => {
    const userData = JSON.parse(localStorage.getItem('data'));

    if (userData) {
      this._userData = userData;
      this._handleSetUserData(this._userData);
      this._closeStartWindow();
    } else {
      this._setEventListeners();
    }
  }
}

export default Start
