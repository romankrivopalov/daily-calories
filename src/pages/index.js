import './index.css';

import * as all from '../utils/constants.js';

import Start from '../components/Start.js';
import User from '../components/User.js';
import Navbar from '../components/Navbar.js';
import SettingPage from '../components/SettingPage';

const user = new User();
const start = new Start(all.startSetting, user.setUserData);
const settingPage = new SettingPage(all.settingPage, user.getUserData);
const navbar = new Navbar(all.navbarSetting, settingPage.openSettingPage);

start.setData();
navbar.setEventListeners();
