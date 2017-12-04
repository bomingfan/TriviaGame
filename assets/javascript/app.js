
// set variable for timer
var timeLeft = 20; 
var intervalId;

// set variable for count
var correct = 0; 
var incorrect = 0;
var unanswered = 0;
var nameArray = ["www", "email", "bios", "cmd"];

// hide the container in the beginning
$(".container").hide();

// when start button click, show container, hide start button and run count
$("#startGame").click(function (){
    $(".container").show();
    $(this).hide();
    runCount();    
});


// set interval function
function runCount() {
    intervalId = setInterval(countDown, 1000);
}
// set clearinterval function
function stopCount() {
    clearInterval(intervalId);
}

// set the countdown function
function countDown() {
    timeLeft--;
    $("#timer").html("Time Remaining: " + timeLeft + " Seconds");
// if time is 0, stop count and show result
    if (timeLeft === 0) {
        stopCount();
        $("#timer").html("Time's Up");
        setTimeout(showResult, 1000);
    }
}



// function show result
function showResult() {

    // loop through each question, get the value and update the varaibles
    for (i=0; i < nameArray.length; i++) {
        // get the value from input button
        var selValue = $('input[name=' + nameArray[i] +']:checked').val();
            // if answer is correct, correct++         
            if ( selValue === "1") {
                correct++;
            // if answer is incorrect, incorrect++
            } else if ( selValue === "0") { 
                incorrect++;
            // if non of the above, unanswered++
            } else {
                unanswered++;
            } 
        }

    $('.container').html('<br/>     Correct: ' + correct + '</b>');
    $('.container').append('<br/>     Incorrect: ' + incorrect + '</b>');
    $('.container').append('<br/> Unanswered: ' + unanswered + '</b>');
}



// when clicking the finish button, show statistics
$('#btnGetValue').click(function() {

// if button is clicked, stop cocunt and show result
    stopCount();
    $("#timer").html("Time's Up");
    showResult();

});




