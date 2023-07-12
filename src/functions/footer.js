const footer = function () {
    const footerText = document.createElement('div');
    footerText.id = 'footer';
    footerText.innerHTML = "© 2023 Galaxy Diner"

    return footerText;
}

export {footer};