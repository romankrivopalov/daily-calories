import './index.css';

import * as all from '../utils/constants.js';

import StartPage from '../components/StartPage.js';
import User from '../components/User.js';
import Navbar from '../components/Navbar.js';
import ProductPage from '../components/ProductPage.js';
import SettingPage from '../components/SettingPage.js';

const user = new User();
const startPage = new StartPage(all.startPageSetting, user.setUserData);
const productPage = new ProductPage(all.productPageSetting);
const settingPage = new SettingPage(all.settingPage, user.getUserData, user.setUserData);
const navbar = new Navbar(all.navbarSetting, settingPage.openSettingPage, productPage.openPage);

startPage.setData();
navbar.setEventListeners();
