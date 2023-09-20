import './index.css';

import * as all from '../utils/constants.js';

import Popup from '../components/Popup.js';
import StartPage from '../components/StartPage.js';
import User from '../components/User.js';
import Navbar from '../components/Navbar.js';
import ProductPage from '../components/ProductPage.js';
import SettingPage from '../components/SettingPage.js';

const popup = new Popup(all.popupSetting);
const user = new User();
const startPage = new StartPage(all.startPageSetting, user.setUserData);
const productPage = new ProductPage(all.productPageSetting, popup.openPage);
const settingPage = new SettingPage(all.settingPage, user.getUserData, user.setUserData);

const allPage = [productPage, settingPage]

const closeAllPage = () => {
  allPage.forEach(page => page.closePage());
}

const navbar = new Navbar(all.navbarSetting, closeAllPage, settingPage.openSettingPage, productPage.openPage);

popup.setEventListeners();
productPage.setEventListeners();
startPage.setData();
navbar.setEventListeners();
