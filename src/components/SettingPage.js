class SettingPage {
  constructor(setting, handleGetUserData, handleSetUserData) {
    this._setting = setting;
    this._settingWindow = document.querySelector('#setting');
    this._form = this._settingWindow.querySelector('#form-setting');
    this._allGenderBtns = this._form.querySelectorAll('.button[data-type="gender"]');
    this._allInputs = this._form.querySelectorAll('input[data-type="setting"]');
    this._allActivityBtns = this._form.querySelectorAll('.button[data-type="activity"]');
    this._btnSubmit = this._form.querySelector('#setting-btn-submit');
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
      if (btn.getAttribute('data-gender') === gender) {
        btn.classList.add('button_type_active');
      } else {
        btn.classList.remove('button_type_active');
      }
    });

    this._allInputs.forEach(input => {
      if (input.getAttribute('data-user') === 'age') input.value = +age;
      if (input.getAttribute('data-user') === 'height') input.value = +height;
      if (input.getAttribute('data-user') === 'weight') input.value = +weight;
    })

    this._allActivityBtns.forEach(btn => {
      if (btn.getAttribute('data-activity') === activity) btn.classList.add('button_type_active');
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

  // переключение активной кнопки выбора пола
  _toggleActiveGenderBtn = (element) => {
    this._allGenderBtns.forEach(btn => {
      btn.classList.remove('button_type_active');
    });

    element.classList.add('button_type_active');

    this._newUserData.gender = element.getAttribute('data-gender');

    // проверка на отличие переданного массива и измененного
    this._checkNewUserData();
  }

  _setEventListeners = () => {
    this._allGenderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this._toggleActiveGenderBtn(btn);
      })
    });

    this._allActivityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this._toggleActiveActivityBtn(btn);
      });
    });

    this._form.addEventListener('submit', (e) => {
      e.preventDefault();

      // при срабатывании submit, отправляем новые данные
      this._handleSetUserData(this._newUserData);

      // установка новых данных в localStorage
      localStorage.setItem('data', JSON.stringify(this._newUserData));
    })
  }

  // открытие страницы настроек
  openSettingPage = () => {
    this._setEventListeners();

    this._setUserData(this._handleGetUserData());

    this._settingWindow.classList.add('setting_show');
  }
}

export default SettingPage
