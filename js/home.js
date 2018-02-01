"use strict";

import { menu } from "./menu.js";

const home = {
    showHome : function () {
        window.mainContainer.innerHTML = "";

        let title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Infinity Warehouses";

        let greeting = document.createElement("p");
        greeting.textContent = "Welcome to Infinity Warehouses." +
            " Where products goes to disappear.";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showTopMenu("Home");
        menu.showMenu("home");
    }
};

export { home };
