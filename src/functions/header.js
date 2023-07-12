const header = function() {
    const content = document.getElementById('content')
       
    const contanier = document.createElement('div');
    contanier.id='container';
    content.appendChild(contanier);

    //Logo 
    const logo = document.createElement('div');
    logo.id = 'logo';
    logo.innerHTML = 'Galaxy Diner'
    contanier.appendChild(logo)

    //Navigation list
    const nav = document.createElement('nav')
    nav.id='nav';
    contanier.appendChild(nav);

    //Home tab
    const home = document.createElement("li");
    home.id = 'home';
    home.innerHTML = 'Home'
    nav.appendChild(home);

    //Menu tab
    const menu = document.createElement("li");
    menu.id = 'menu';
    menu.innerHTML = 'Menu';
    nav.appendChild(menu);

    //Contact Tab
    const contact = document.createElement("li");
    contact.id = 'contact';
    contact.innerHTML = 'Contact';
    nav.appendChild(contact);

    return header;
}

export {header};