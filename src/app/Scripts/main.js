/*global $ , alert , console*/


// function passVal(){
//     var data = {
//         fn: "filename",
//         str: "this_is_a_dummy_test_string"
//     };
//
//     $.post("test.php", data); // to send data from js To  $POST{} array in php
// }
// passVal();   //      //
// pass val to php


$(document).ready(function () {



    var WindowHeight = $(window).height();
    var NavBar = $(' header .navbar ');


    $(' header ').height(WindowHeight) ;



    $('header .btn-nav').click(function (e)
    {
        //  console.log(e);  // e object carry info from event click

        $('header nav ul ').toggle().addClass("active");

    });





    $(window).scroll(function ()
    {

         if( $(window).scrollTop()   >=  WindowHeight - 100  )
         {
             NavBar.addClass('sticky');
         }
         else
         {
             NavBar.removeClass('sticky');
         }

    });

    $.post();
    $(document).on('click' , function (e) {
       var ElementName = e.target;
        // alert($(ElementName).closest('header').length);
        // closest('navbar').length  check  $(ElementName) his parent is header
       if(!$(ElementName).closest('header').length &&  $('header nav ul  ').hasClass('active') )
       {
           $('header nav  ul  ').css("display" , "none");
       }
    });
});

