import './index.css';

import * as all from '../utils/constants.js';

import Start from '../components/Start.js';
import User from '../components/User.js';
import Navbar from '../components/Navbar.js';

const user = new User();
const start = new Start(all.startSetting, user.setUserData);
const navbar = new Navbar(all.navbarSetting);

start.setEventListeners();
