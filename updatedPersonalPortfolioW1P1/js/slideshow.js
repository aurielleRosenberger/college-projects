/* *******************************************************************
***
*Original Author: Auri Rosenberger
*Date Created: 01, October 2021
*Version: 1
*Date Last Modified: 01, October 2021
*Modified by: Auri Rosenberger
*Modification log:

- 10/01/2021 - Slideshow with three images for examples on recent projects
             - 
***
******************************************************************** */

"use strict";

$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
    
    setInterval( () => {   
        $("#captionSlide").fadeOut(1500);
        $("#slide").fadeOut(1500,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeIn(1500);                    
                $("#captionSlide").text(nextCaption).fadeIn(1500);
            });
    },
    5000);
});