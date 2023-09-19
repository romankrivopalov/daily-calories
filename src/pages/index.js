import './index.css';

import * as all from '../utils/constants.js';

import StartPage from '../components/StartPage.js';
import User from '../components/User.js';
import Navbar from '../components/Navbar.js';
import SettingPage from '../components/SettingPage';

const user = new User();
const startPage = new StartPage(all.startSetting, user.setUserData);
const settingPage = new SettingPage(all.settingPage, user.getUserData, user.setUserData);
const navbar = new Navbar(all.navbarSetting, settingPage.openSettingPage);

startPage.setData();
navbar.setEventListeners();
