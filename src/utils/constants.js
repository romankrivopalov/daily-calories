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
  btnMainSelector: '.navbar__item[data-type="main"]',
  btnProductsSelector: '.navbar__item[data-type="products"]',
  btnSettingSelector: '.navbar__item[data-type="setting"]',
  itemMainSelector: 'navbar__item[data-type="main"]',
  itemProductsSelector: 'navbar__item[data-type="products"]',
  itemSettingSelector: 'navbar__item[data-type="setting"]',
  itemActiveClass: 'navbar__item_active',
}

export const mainPageSetting = {
  pageSelector: '#main',
  pageShowClass: 'main_show',
  btnAddEatingSelector: '.button[data-type="eating-add"]',
}

export const eatingSetting = {
  templateSelector: '#eating-item',
  eatingItemSelector: '.main__eating',
  btnEatingRemoveSelector: '.button[data-type="eating-remove"]',
}

export const productPageSetting = {
  pageSelector: '#products',
  pageShowClass: 'products_show',
  productContainer: '#product-list',
  btnAddProductSelector: '.button[data-type="product-add"]',
}

export const productSetting = {
  productTemplateSelector: '#product',
  productSelector: '.product',
  productNameSelector: '.product__content[data-type="name"]',
  productcaloriesSelector: '.product__content[data-type="calories"]',
  productBtnDeleteSelector: '.button_type_del',
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

export const popupNewProductSetting = {
  pageSelector: '#popup-add-product',
  pageShowClass: 'popup_show',
  popupFormSelector: '#add-product-form',
  popupInputSelector: '.input[data-type="add-product"]',
  popupBtnSubmitSelector: '#popup-btn-submit',
  nameAttributeDataProduct: 'data-product',
}

export const popupNewEatingSetting = {
  pageSelector: '#popup-add-eating',
  pageShowClass: 'popup_show',
  popupFormSelector: '#add-eating-form',
}
