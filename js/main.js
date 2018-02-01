"use strict";

import { home } from './home.js';

window.rootElement = document.getElementById("root");

window.mainContainer = document.createElement("main");
window.mainContainer.className = "container";

window.navigation = document.createElement("nav");
window.navigation.className = "bottom-nav";

window.topNavigation = document.createElement("nav");
window.topNavigation.className = "top-nav";

home.showHome();
