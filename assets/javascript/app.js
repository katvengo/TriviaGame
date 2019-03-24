// Answer Key
//All answers with value set to 'correct'
//if input button checked matches val of correct then increase corrects
//if its wrong ++ losses 

$(document).ready(function () {
    $('.secondDiv').hide();
    $('.thirdDiv').hide();
    $('.fourthDiv').hide();
    $('.end').hide();
});
    
    var clockRunning = false;
    var time = 120;
    var timerRunning = false;
    var intervalId;
    
    var win = 0
    var loss = 0
    
    
    function begin() {
        $('.start').hide();
        $('.secondDiv').show();
        $('.thirdDiv').show();
        $('.fourthDiv').show();
        clockRunning = true;
        setTimeout(done, 120000); // Set timer 5 minutes
        setInterval(function () {
            time--
            $(".time").text(time);
        }, 1000);
        
    }
    
    
    
    function done() {
        $('.start').hide();
        $('.secondDiv').hide();
        $('.thirdDiv').hide();
        $('.fourthDiv').hide();
        $('.end').show();
        
        var que1 = $("input[name=nameBatman]:checked").val();
        var que2 = $("input[name=newspaper]:checked").val();
        var que3 = $("input[name=elecktra]:checked").val();
        var que4 = $("input[name=captainmarvel]:checked").val();
        var que5 = $("input[name=superman]:checked").val();
        var que6 = $("input[name=avengers]:checked").val();
        var que7 = $("input[name=peterparker]:checked").val();
        var que8 = $("input[name=arthurcurry]:checked").val();
        var que9 = $("input[name=Spider-Man]:checked").val();
        var que10 = $("input[name=daredevil]:checked").val();
        
        var userAnswers = [que1, que2, que3, que4, que5, que6, que7, que8, que9, que10]
        
        for (var i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === 'correct') {
                win++;
                
            }
            if(userAnswers[i] === 'wrong'){
                loss ++;
            }
            
        }
        $('.end').append('<h3>' + 'Correct Answers:  ' + win + '/' + userAnswers.length + '</h3>')
        $('.end').append('<h3>' + 'Wrong Answers:  ' + loss + '/' + userAnswers.length + '</h3>')
    }
    
    
    
    

