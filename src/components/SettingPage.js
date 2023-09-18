class SettingPage {
  constructor(setting, handleGetUserData) {
    this._setting = setting;
    this._settingWindow = document.querySelector('#setting');
    this._form = this._settingWindow.querySelector('#form-setting');
    this._allGenderBtns = this._form.querySelectorAll('.button[data-type="gender"]');
    this._allInputs = this._form.querySelectorAll('input[data-type="setting"]');
    this._allActivityBtns = this._form.querySelectorAll('.button[data-type="activity"]');
    this._handleSetUserData = handleGetUserData;
  }

  _setUserData = (data) => {
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

  _toggleActiveGenderBtn = (element) => {
    this._allGenderBtns.forEach(btn => {
      btn.classList.remove('button_type_active');
    });

    element.classList.add('button_type_active');
    // * установить новые данные пользователя
    // если они отличаются, включить кнопку отправки
  }

  _setEventListeners = () => {
    this._allGenderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this._toggleActiveGenderBtn(btn);
      })
    })
  }

  openSettingPage = () => {
    this._setEventListeners();

    this._setUserData(this._handleSetUserData())

    this._settingWindow.classList.add('setting_show');
  }
}

export default SettingPage
