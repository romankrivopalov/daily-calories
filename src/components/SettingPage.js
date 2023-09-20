import Form from './Form.js';

class SettingPage extends Form {
  constructor(setting, handleGetUserData, handleSetUserData) {
    super(setting)
    this._handleGetUserData = handleGetUserData;
    this._handleSetUserData = handleSetUserData;
    this._initialUserData = null;
    this._newUserData = null;
  }

  _setUserData = (data) => {
    // сохранение начальных через глубокую копию, значений пользователя для дальнейшего сравнения
    this._initialUserData = structuredClone(data);
    this._newUserData = structuredClone(data);

    // деструктуризация переданных значений
    const { gender, age, height, weight, activity } = data;

    this._allGenderBtns.forEach(btn => {
      if (btn.getAttribute(this.setting.nameAttributeDataGender) === gender) {
        btn.classList.add(this.setting.btnInactiveClass);
      } else {
        btn.classList.remove(this.setting.btnInactiveClass);
      }
    });

    this._allInputs.forEach(input => {
      if (input.getAttribute(this.setting.nameAttributeDataUser) === 'age') input.value = +age;
      if (input.getAttribute(this.setting.nameAttributeDataUser) === 'height') input.value = +height;
      if (input.getAttribute(this.setting.nameAttributeDataUser) === 'weight') input.value = +weight;
    })

    this._allActivityBtns.forEach(btn => {
      if (btn.getAttribute(this.setting.nameAttributeDataActivity) === activity) {
        btn.classList.add(this.setting.btnInactiveClass);
      }
    })
  }

  _checkNewUserData = () => {
    // сравнение начальных данных и измененных
    if (JSON.stringify(this._initialUserData) === JSON.stringify(this._newUserData)) {
      this._btnSubmit.disabled = true;
    } else {
      this._btnSubmit.disabled = false;
    }
  }

  // переопределение метода переключения активной кнопки выбора активности
  toggleActivityBtn(element) {
    super.toggleActivityBtn(element);

    this._newUserData.activity = element.getAttribute(this.setting.nameAttributeDataActivity);
    // проверка на отличие переданного массива и измененного
    this._checkNewUserData();
  }

  // переопределение метода переключения активной кнопки выбора пола
  toggleGenderBtn(element) {
    super.toggleGenderBtn(element)

    this._newUserData.gender = element.getAttribute(this.setting.nameAttributeDataGender);
    // проверка на отличие переданного массива и измененного
    this._checkNewUserData();
  }

  // проверка валидности поля инпута и установка значения
  _checkValidityInput = (input) => {
    if (input.validity.valid) {
      // обращение к ключу объекта по имени передаваемого атрибута
      this._newUserData[input.getAttribute(this.setting.nameAttributeDataGender)] = +input.value;

      // проверка на отличие переданного массива и измененного
      this._checkNewUserData();
    } else {
      this._checkNewUserData();
    }
  }

  _setEventListeners = () => {
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

      // при срабатывании submit, отправляем новые данные
      this._handleSetUserData(this._newUserData);
      this._initialUserData = structuredClone(this._newUserData);

      this._checkNewUserData();

      // установка новых данных в localStorage
      localStorage.setItem('data', JSON.stringify(this._newUserData));
    })
  }

  // открытие страницы настроек
  openPage() {
    this._setEventListeners();

    this._setUserData(this._handleGetUserData());

    super.openPage();
  }
}

export default SettingPage
