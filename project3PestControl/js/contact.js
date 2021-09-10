/* *******************************************************************
***
*Original Author: Auri Rosenberger
*Date Created: 26, August 2021
*Version: 1
*Date Last Modified: 03, September 2021
*Modified by: Auri Rosenberger
*Modification log:

- 09/03/2021 - Created contact.js
             - Brought in JavaScript that was included from Chapter 6's register_2.0
             - Lines 66-67 to give a confirmation alert versus redirecting to another page
             - Lines 77-78 fixed so that it wouldn't clash with navigation ul

***
******************************************************************** */

"use strict";

const $ = selector => document.querySelector(selector); 

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
    if (node == null) {
        const form = $("form");

        form.parentNode.insertBefore(ul, form);
    } else {
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    const email = $("#email_address");
    const phone = $("#phone");
    const country = $("#country");
    const terms = $("#terms");
    const comments = $("#comments");

    const msgs = [];

    if (email.value == "") {
        msgs[msgs.length] = "Please enter an email address.";
    } 
    if (phone.value == "") {
        msgs[msgs.length] = "Please enter a mobile phone number."; 
    } 
    if (country.value == "") {
        msgs[msgs.length] = "Please select a country.";
    } 
    if (terms.checked == false) {
        msgs[msgs.length] = "You must agree to the terms of service."; 
    }
    if (comments.value == "") {
        msgs[msgs.length] = "Please leave an entry for comments.";
    } 

    if (msgs.length == 0) {
        alert("Submission successful! We'll be in contact!"); //
        resetForm(); //
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    $("form").reset();

    const errorMsg = $("ul.messages"); //
    if (errorMsg !== null) errorMsg.remove(); //
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);  
    $("#email_address").focus();
});