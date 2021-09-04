/* *******************************************************************
***
*Original Author: Auri Rosennberger
*Date Created: 26, August 2021
*Version: 1
*Date Last Modified: 03, September 2021
*Modified by: Auri Rosennberger
*Modification log:

- 09/02/2021 - Added event handler for clicking to expand infomation in FAQ
- 09/03/2021 - Replaced the if-else statements with original toggles
             - 
***
******************************************************************** */

"use strict";

// const $ = selector => document.querySelector(selector);

const toggle = evt => {
    evt.preventDefault();
    const linkElement = evt.currentTarget;
    const h2Element = linkElement.parentNode;
    const divElement = h2Element.nextElementSibling;

    h2Element.classList.toggle('minus');
    divElement.classList.toggle('open');
};

document.addEventListener("DOMContentLoaded", () => {
    
    const linkElements = faqDirect.querySelectorAll("#faqDirect a"); //
    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }
    
    linkElements[0].focus();
});