// Answer Key
//All answers with value set to 'correct'
//if input button checked matches val of correct then increase corrects
//if its wrong ++ losses 

$(document).ready(function () {
    $('.secondDiv').hide();
    $('.thirdDiv').hide();
    $('.fourthDiv').hide();

});

var clockRunning = false;
var time = 0;
var timerRunning = false;
var intervalId;



function begin() {
    $('.start').hide();
    $('.secondDiv').show();
    $('.thirdDiv').show();
    $('.fourthDiv').show();
    clockRunning = true;
    setTimeout(done, 420000); // Set timer 7 minutes
//if (!clockRunning) {
    //intervalId = setInterval(count, 1000);
    setInterval(function(){ 
        time++
        console.log('****',time);
        $(".time").text(time);
    }, 1000);
    //$(".time").text("00:00");
}

function count() {
    time++
}



function done() {
    $('.start').hide();
    $('.secondDiv').hide();
    $('.thirdDiv').hide();
    $('.fourthDiv').hide();
    $('.end').show();

}


var win
var lose
$("input").on("click", function () {
    console.log($("input:checked").val() + " is checked!");
});

// Create, set click action on each one, .foreach function, (you dont know js)
// .for each and look up index correctAnswerIndex ====