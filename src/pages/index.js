import './index.css';

import * as all from '../utils/constants.js';

import Popup from '../components/Popup.js';
import StartPage from '../components/StartPage.js';
import User from '../components/User.js';
import Navbar from '../components/Navbar.js';
import ProductPage from '../components/ProductPage.js';
import Product from '../components/Product.js';
import SettingPage from '../components/SettingPage.js';


const user = new User();
const startPage = new StartPage(all.startPageSetting, user.setUserData);
const productPage = new ProductPage(
  all.productPageSetting,
  // функция создающая инстанс popup, назначающая обработчик и возвращающая метод открытия
  () => {
    const popup = new Popup(all.popupSetting, productPage.setProduct);
    popup.setEventListeners(productPage.setProduct);

    return popup.openPage
  },
  // функция создания инстанса product для добавляения его на страницу
  (productData) => {
    const product = new Product(all.productSetting, productPage.removeProduct);

    return product.generateProduct(productData);
  }
);
const settingPage = new SettingPage(all.settingPage, user.getUserData, user.setUserData);

const allPage = [productPage, settingPage]

const closeAllPage = () => {
  allPage.forEach(page => page.closePage());
}

const navbar = new Navbar(all.navbarSetting, closeAllPage, settingPage.openSettingPage, productPage.openPage);

productPage.setEventListeners();
startPage.setData();
navbar.setEventListeners();
