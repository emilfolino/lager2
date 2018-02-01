"use strict";

import { home } from './home.js';
import { inventory } from './inventory.js';

const menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        let navElements = [{name: "Home", class: "home", nav: home.showHome},
            {name: "Inventory", class: "assignment", nav: inventory.showInventory}];

        navElements.forEach(function (element) {
            let navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            let icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            let text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);
        });

        window.rootElement.appendChild(window.navigation);
    },
    showTopMenu: function(currentText, backText, callback) {
        window.topNavigation.innerHTML = "";

        window.topNavigation.textContent = currentText;

        if (backText && callback) {
            let back = document.createElement("span");

            back.textContent = backText;
            back.addEventListener("click", callback);

            let icon = document.createElement("i");

            icon.textContent = "chevron_left";
            icon.className = "material-icons";

            back.appendChild(icon);

            window.topNavigation.appendChild(back);
        }

        window.rootElement.appendChild(window.topNavigation);
    }
}

export { menu };
