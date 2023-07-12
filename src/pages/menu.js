const newMenu = function () {
    const menuList = document.createElement("div");
    menuList.id = "menuList";

    menuList.appendChild(createMenuItem("Plain Omelette", "Made with 3 eggs"));
    menuList.appendChild(createMenuItem("Cheese Omelette", "Made with 3 eggs, cheddar & monterey jack cheese"));
    menuList.appendChild(createMenuItem("Classic Benedict", "Ham"));
    menuList.appendChild(createMenuItem("Lox Benedict", "Smoke salmon and cream cheese"));
    menuList.appendChild(createMenuItem("Plain Waffle", "Fresh made Belgian waffle"));
    menuList.appendChild(createMenuItem("Waffle & Eggs", "Freshly made Belgian waaffle served with 2 eggs and home fries"));
    menuList.appendChild(createMenuItem("French Toast", "3 slices of thick cut French bread"));
    menuList.appendChild(createMenuItem("French Toast & Eggs", "2 slices of thick cut French bread served with 2 eggs and home fries"));
    menuList.appendChild(createMenuItem("Pancakes", "3 pancakes"));
    menuList.appendChild(createMenuItem("Sweet & Salty Pancakes", "3 pancakes loaded with bacon and sausage"));
    menuList.appendChild(createMenuItem("Sides", "Bacon, ham or sausage, Smoked meat, pemeal back, One egg, Side fruit, Cereal"));
    menuList.appendChild(createMenuItem("Beverages", "Regular Tea, Large Juice, Chocolate Milk, Bottle Water"));

    const center = document.querySelector("#center");
    center.textContent = "";
    center.appendChild(menuList);

    return menuList;
};

function createMenuItem(name, description) {
    const menuitem = document.createElement("div");
    menuitem.id = "menuitem";

    const foodname = document.createElement("h2");
    foodname.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuitem.appendChild(foodname);
    menuitem.appendChild(foodDescription);

    return menuitem;
}

export { newMenu };
