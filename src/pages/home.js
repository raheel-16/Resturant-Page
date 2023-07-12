import { firstPage } from "../functions/firstpage";

const home = function() {
    const content = document.querySelector("#content");

    content.textContent = "";
    firstPage();

    return home;
};

export {home};