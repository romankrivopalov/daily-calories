export const startPageSetting = {
  pageSelector: '#start',
  pageShowClass: 'start_show',
  formSelector: '.start__form',
  btnGenderSelector: '.button[data-type="gender"]',
  btnActivitySelector: '.button[data-type="activity"]',
  inputSelector: '.input[data-type="start"]',
  btnSubmitSelector: '#start-btn-submit',
  btnInactiveClass: 'button_type_active',
  nameAttributeDataType: 'data-type',
  nameAttributeDataUser: 'data-user',
  nameAttributeDataActivity: 'data-activity',
  nameAttributeDataGender: 'data-gender',
  userData: {
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
  }
}

export const navbarSetting = {
  itemMainSelector: 'navbar__item[data-type="main"]',
  itemProductsSelector: 'navbar__item[data-type="products"]',
  itemSettingSelector: 'navbar__item[data-type="setting"]',
}

export const productPageSetting = {
  pageSelector: '#products',
  pageShowClass: 'products_show',
}

export const settingPage = {
  pageSelector: '#setting',
  pageShowClass: 'setting_show',
  formSelector: '#form-setting',
  btnGenderSelector: '.button[data-type="gender"]',
  btnActivitySelector: '.button[data-type="activity"]',
  inputSelector: 'input[data-type="setting"]',
  btnSubmitSelector: '#setting-btn-submit',
  btnInactiveClass: 'button_type_active',
  nameAttributeDataType: 'data-type',
  nameAttributeDataUser: 'data-user',
  nameAttributeDataActivity: 'data-activity',
  nameAttributeDataGender: 'data-gender',
}
