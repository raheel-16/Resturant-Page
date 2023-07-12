import { firstPage } from "./functions/firstpage.js";
import {newMenu} from "./pages/menu.js";
import { contact } from "./pages/contact.js";
import { home } from "./pages/home.js";
import './styles/menu.css';
import './styles/home.css';
import './styles/contact.css';


firstPage();

const contactbutton = document.querySelector('#contact');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');

contactbutton.addEventListener('click', function() {
    contact();
});

homeButton.addEventListener('click', function() {
    home();
});

menuButton.addEventListener('click', function() {
    newMenu();
});
