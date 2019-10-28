//$(document).ready(function(){
// Questions and Timer to show and when start button is clicked.
var number = 30;

var intervalID;

function run() {

    intervalID = setInterval(decrement, 1000);
    // clearInterval(intervalId);

}


function decrement() {
    number--;

    $("#Time").html("<h2>" + number + "</h2");

    if (number == 0) {
        stop();
        console.log(number == 0);
        console.log("stop works");
    }
}


function stop() {
    clearInterval(intervalID);
    console.log("the stop function works");
}


$(".start").click(function () {
    $("#container").hide();
    $("#questions").show();
    console.log("journey to space")

    run();




});


$("#input[type='button']").click(function() {
    var answer = $("#input[answer ='correct']: checked").val();
      








    $(".submit").click(function () {
        $("#questions").hide();
        $("#results").show();

        run();
       
    });

});






