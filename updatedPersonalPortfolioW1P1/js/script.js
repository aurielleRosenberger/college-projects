/* *******************************************************************
***
*Original Author: Auri Rosenberger
*Date Created: 01, October 2021
*Version: 1
*Date Last Modified: 01, October 2021
*Modified by: Auri Rosenberger
*Modification log:

- 10/01/2021 - Brought in applicable submission code for contact form
             - Regex is present for email, mobile phone, and comments textbox area
             - 
***
******************************************************************** */

"use strict";

const displayErrorMsgs = msgs => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    const node = $("ul.messages");
    if (node.length == 0) {
        const form = $("form");

        form[0].parentNode.insertBefore(ul, form[0]);
    } else {
        node[0].parentNode.replaceChild(ul, node[0]);
    }
}

const processEntries = () => {
    const email = $("#email_address").val(); 
    const phone = $("#phone").val();
    const comments = $("#comments").val();

    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    const msgs = [];

    let isValid = true;
    if (!emailPattern.test(email) ) {
        isValid = false;
        msgs[msgs.length] = "Please enter a valid email.";
    }
    if (!phonePattern.test(phone) ) {
        isValid = false;
        msgs[msgs.length] = "Please enter a phone number in NNN-NNN-NNNN format.";
    }
    if (comments == "") {
        msgs[msgs.length] = "Please leave an entry for comments.";
    } 

    if (msgs.length == 0) {
        alert("Contact information sent!");
        resetForm();
    }
    else {
        displayErrorMsgs(msgs);
    }

};

const resetForm = () => {
    $("form")[0].reset();

    const errorMsg = $("ul.messages");
    if (errorMsg.length > 0) errorMsg.remove();
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#submit").addEventListener("click", processEntries);
    document.querySelector("#reset_form").addEventListener("click", resetForm);  
    document.querySelector("#email_address").focus();
});