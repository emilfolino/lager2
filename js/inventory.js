"use strict";

import { menu } from "./menu.js";

const inventory = {
    baseURL: "http://localhost:8111",
    apiKey: "fdc42b2d941e8c6f7b38d974df3758ce",
    showInventory: function () {
        window.mainContainer.innerHTML = "";

        let title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Inventory";

        let inventoryList = "";
        const fullURL = inventory.baseURL + "/products?api_key=" + inventory.apiKey;

        fetch(fullURL).then(function (response) {
            return response.json();
        }).then(function(responseData) {
            let products = responseData.data;

            products.forEach(function(product) {
                let productElement = document.createElement("a");
                let stock = document.createElement("span");

                productElement.textContent = product.name;
                productElement.className = "inventory-list-item";

                stock.textContent = product.stock;

                productElement.addEventListener("click", function () {
                    inventory.showProduct(product.id);
                });

                productElement.appendChild(stock);
                window.mainContainer.appendChild(productElement);
            });
        });

        window.mainContainer.appendChild(title);

        window.rootElement.appendChild(window.mainContainer);

        menu.showTopMenu("Inventory");
        menu.showMenu("assignment");
    },
    showProduct: function(id) {
        window.mainContainer.innerHTML = "";

        let fullURL = inventory.baseURL + "/product/" + id + "?api_key=" + inventory.apiKey;

        fetch(fullURL).then(function (response) {
            return response.json();
        }).then(function(responseData) {
            let product = responseData.data;

            let title = document.createElement("h1");

            title.className = "title";
            title.textContent = product.name;

            let greeting = document.createElement("div");
            let specifiers = "";

            try {
                specifiers = JSON.parse(product.specifiers);
            } catch (e) {
                console.error(e);
            }

            greeting.innerHTML = "<p>" + product.description + "</p>";

            for (let key in specifiers) {
                if (specifiers.hasOwnProperty(key)) {
                    greeting.innerHTML += "<p>" + key + ": " + specifiers[key] + "</p>";
                }
            }

            greeting.innerHTML += "<p>Stock: " + product.stock + "</p>" +
                "<p>Location: " + product.location + "</p>";

            window.mainContainer.appendChild(title);
            window.mainContainer.appendChild(greeting);

            window.rootElement.appendChild(window.mainContainer);

            menu.showTopMenu(product.name, "Inventory", inventory.showInventory);
            menu.showMenu("assignment");
        });
    }
};

export { inventory };
