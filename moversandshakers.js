/**************************************
* TITLE: pick me
* AUTHOR: Kiren Kaur
* CREATE DATE: 3/28/18
* PURPOSE: learn about jquery
* LAST MODIFIED ON: 3/28/18
**************************************/


$(document).ready(function() {

    //when button clicked
    $("#hide").click(hide);
    $("#show").click(show);
    $("#toggle").click(toggle);
    $("#slideUp").click(slideUp);
    $("#slideDown").click(slideDown);
    $("#fadeOut").click(fadeOut);
    $("#fadeIn").click(fadeIn);
    $("#multiple").click(multiple)


    function hide() {
        $('p').hide();
    }

    function show() {
        $('p').show();
    }

    function toggle() {
        $('p').toggle();
    }

    function slideUp() {
        $('p').slideUp();
    }

    function slideDown() {
        $('p').slideDown();
    }

    function fadeOut() {
        $('p').fadeOut();
    }

    function fadeIn() {
        $('p').fadeIn();
    }

    function multiple() {
        $('p').slideUp().fadeOut();
    }

    //Tested in Google Chrome and in Edge
    //Seemed to be slightly faster in Edge

}());
