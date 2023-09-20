import Form from './Form.js';

class StartPage extends Form {
  constructor(setting, handleSetUserData, handleOpenMainPage) {
    super(setting)
    this._handleSetUserData = handleSetUserData;
    // открытие главной страницы
    this._handleOpenMainPage = handleOpenMainPage;
    this._userData = this.setting.userData;
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

  // переопределение метода переключения активной кнопки выбора пола
  toggleGenderBtn(element) {
    super.toggleGenderBtn(element);

    this._setUserData(
      element.getAttribute(this.setting.nameAttributeDataType),
      element.getAttribute(this.setting.nameAttributeDataGender)
    );
  }

  // переопределение метода переключения активной кнопки выбора активности
  toggleActivityBtn(element) {
    super.toggleActivityBtn(element)

    this._setUserData(
      element.getAttribute(this.setting.nameAttributeDataType),
      element.getAttribute(this.setting.nameAttributeDataActivity)
    );
  }

  // проверка валидности поля инпута и установка значения
  _checkValidityInput = (input) => {
    if (input.validity.valid) {
      this._setUserData(input.getAttribute(this.setting.nameAttributeDataUser), +input.value);
    } else {
      this._setUserData(input.getAttribute(this.setting.nameAttributeDataUser), null);
    }
  }

  setEventListeners = () => {
    this._allGenderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggleGenderBtn(btn);
      });
    });

    this._allInputs.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkValidityInput(inputElement);
      });
    });

    this._allActivityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.toggleActivityBtn(btn);
      });
    });

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      // если все данные у объекта есть, отправляем их
      if (this._checkAvailableAllData()) {
        this._handleSetUserData(this._userData);

        this.closePage();
        this._handleOpenMainPage();
      }
    })
  }

  // проверка localStorage установка начальных данных
  setData = () => {
    const userData = JSON.parse(localStorage.getItem('data'));

    if (userData) {
      this._userData = userData;
      this._handleSetUserData(this._userData);
      this._handleOpenMainPage();
      this.closePage();
    } else {
      this.setEventListeners();
      this.openPage();
    }
  }
}

export default StartPage
