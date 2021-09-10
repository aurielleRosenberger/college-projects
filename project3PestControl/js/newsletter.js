/* *******************************************************************
***
*Original Author: Auri Rosenberger
*Date Created: 26, August 2021
*Version: 1
*Date Last Modified: 03, September 2021
*Modified by: Auri Rosenberger
*Modification log:

- 09/03/2021 - Created contact.js
             - Inserted code from Chapter 6's email_list
             - Lines 61-64 for alert after submission and form resets (along with other tweaked places)
***
******************************************************************** */

"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        let booleanVariable = true;

        if (email1.value == "") { 
            email1.nextElementSibling.textContent = "First email is required.";
            booleanVariable = false;
        }
        else {
            email1.nextElementSibling.textContent = "";
        }
    
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "Second email is required.";
            booleanVariable = false;
        }
        else {
            email2.nextElementSibling.textContent = "";
        }
    
        if (email1.value != email2.value) {
            email2.nextElementSibling.textContent = "Both emails must match.";
            booleanVariable = false;
        }
    
        if (firstName.value == "") {
            firstName.nextElementSibling.textContent = "First name is required.";
            booleanVariable = false;
        }
        else {
            firstName.nextElementSibling.textContent = "";
        }
    
        if (booleanVariable) { //
            resetForm(); //
            alert("You're all set, you will be notfied when there are discounts!"); //
        }
    });

    $("#clear_form").addEventListener("click", () => {
        resetForm();
        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});

function resetForm() { //
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";
}
