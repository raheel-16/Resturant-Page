
const contact = function() {
    const center = document.querySelector("#center");

    const about = document.createElement("div");
    about.id = "about";

    const number = document.createElement("p")
    number.id = "number"
    number.textContent = '📞 123-456-7890';

    const address = document.createElement("p");
    
    address.textContent = '🏠 123 HollyWood, Los Angeles, USA'

    about.appendChild(number);
    about.appendChild(address);
    center.textContent = "";
    center.appendChild(about);
}

export {contact};