import image from './assets/image.png';
import { header } from "../header.js";
import { footer } from '../footer.js';


const firstPage = function() {
    const content = document.getElementById('content');
    header();
    
    //Adding the image into new div 
    const center = document.createElement('div'); 
    const centercontent = document.createElement('div');
    center.id = 'center';
    centercontent.id = 'centercontent';
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.id='image';
    centercontent.appendChild(imgElement)
    center.appendChild(centercontent);
    content.appendChild(center);
    
    //Appending the Logo to the image
    const logo = document.createElement('div');
    logo.id = 'logocenter';
    logo.innerHTML = 'Galaxy Diner'
    centercontent.appendChild(logo)

    //quote 
    const quote = document.createElement('div');
    const quoteText = document.createElement('p');
    const quoteHeader = document.createElement('p')
    quoteText.id = 'quotetext';
    quoteHeader.id = 'quoteHeader';
    quote.id = 'quote';

    quoteHeader.innerHTML = "Our Statement"
    quoteText.innerHTML = "We are dedicated to providing an unforgettable journey through taste and presentation, leaving our guests with cherished memories and a desire to return. It is our privilege to invite you to indulge in the extraordinary delights of our restaurant."
    quote.appendChild(quoteHeader);
    quote.appendChild(quoteText);
    center.appendChild(quote);

    //footer
    
    content.appendChild(footer());

    return firstPage;
}

export {firstPage};

