import './index.css';

import * as all from '../utils/constants.js';

import PopupNewProduct from '../components/PopupNewProduct.js';
import PopupNewEating from '../components/PopupNewEating.js';
import StartPage from '../components/StartPage.js';
import User from '../components/User.js';
import Navbar from '../components/Navbar.js';
import MainPage from '../components/MainPage.js';
import Eating from '../components/Eating.js';
import ProductPage from '../components/ProductPage.js';
import Product from '../components/Product.js';
import SettingPage from '../components/SettingPage.js';


const user = new User();
const productPage = new ProductPage(
  all.productPageSetting,
  // функция создающая инстанс popup, назначающая обработчик и возвращающая метод открытия
  () => {
    const popupNewProduct = new PopupNewProduct(all.popupNewProductSetting, productPage.setProduct);
    popupNewProduct.setEventListeners();

    return popupNewProduct.openPage
  },
  // функция создания инстанса product для добавляения его на страницу
  (productData) => {
    const product = new Product(all.productSetting, productPage.removeProduct);

    return product.generateProduct(productData);
  }
);
const mainPage = new MainPage(
  all.mainPageSetting,
  // функция создающая инстанс popup, назначающая обработчик и возвращающая метод открытия
  () => {
    const popupNewEating = new PopupNewEating(
      all.popupNewEatingSetting,
      productPage.getAllProducts,
      mainPage.setNewEating,
    );
    popupNewEating.setEventListeners();

    return popupNewEating.openPage
  },
  (data) => {
    const eating = new Eating(all.eatingSetting);

    return eating.generateEating(data);
  }
);
const startPage = new StartPage(all.startPageSetting, user.setUserData, mainPage.openPage);
const settingPage = new SettingPage(all.settingPage, user.getUserData, user.setUserData);

const allPage = [mainPage, productPage, settingPage]

const closeAllPage = () => {
  allPage.forEach(page => page.closePage());
}

const navbar = new Navbar(
  all.navbarSetting,
  closeAllPage,
  mainPage.openPage,
  settingPage.openPage,
  productPage.openPage,
);

mainPage.setEventListeners();
productPage.setEventListeners();
startPage.setData();
navbar.setEventListeners();
