//$(document).ready(function() {
    var number= 100;

    var intervalId;

function run () {
 clearInterval(intervalId);
 intervalID = setInterval(decrement, 1000);

}

function decrement(){
    number --;

$("#Time").html("<h2>" + number + "</h2");
}

$(".start").click(function(){
    $("#container").hide();
    $("#questions").show();
    console.log( "journey to space")

    run();









//Next Get Questions and Timer to show and Timer to start.

//$("#questions").hide(function()){
 //    var container = questions;

//}



   

    });

//});
