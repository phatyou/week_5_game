// When the window loads, hide the quiz questions in the div with the 'results' id
window.onload = function () {
	document.getElementById('results').style.display = 'none';
	document.getElementById('counter').style.display = 'none';
}
//Gotta time it, 60 secs to start, count will clock down by one second (1000 miliseconds)
function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds); //This makes the 
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else { 
          //change this alert to replace the html for the questions and write the tallies to the appropriate div
            alert("Quiz over mofo");
        } 
    }
    tick();
}

//On click hide the start button and make the div with the 'results' id show up- easy
var button = document.getElementById('button');

button.onclick = function () {
	document.getElementById('button').style.display = 'none';
	document.getElementById('results').style.display = 'block';
	document.getElementById('counter').style.display = 'block';
	countdown ();
}

//Tally scores
var correct = 0;
var wrong = 0;
var answersBlank = 0;

// var textCorrect = 

// var wrapper = document.createElement('div');
// var title = document.createElement('h1');


// wrapper.appendChild(title);

// title.innerHTML = correct;

// var element = document.getElementById('btn');

document.getElementById('btn').addEventListener("click", function() {
	alert("Die Die Die!");
		var btnClass = document.getElementsByClassName('test');
		console.log(btnClass);
			for (var i = 0; i < btnClass.length; i++) {

				console.log(btnClass[i].checked); //For loop through the HTML Collection (Node List?)
				if (btnClass[i].checked === true) {
					var checked = btnClass[i].getAttribute("data-answer");
					if (checked === "answer") {
						correct++;
					} else {
						wrong++;
					}
				}
				console.log(correct);
				console.log(wrong);
				

				// if (btnClass[3].checked === true) { //If q1d was checked, add one to correct, else add one to wrong
				// 	correct++;
				// 	console.log(correct);
				// 	console.log("this is correct!");
				// }
				// else {
				// wrong++;
				// console.log(wrong);
				// console.log("this is wrong!");
				// }
}
var right = document.getElementById("correct");
right.innerHTML = correct;

var incorrect = document.getElementById("wrong");
incorrect.innerHTML = wrong;
	});


// function myFunction(){
// 	var btnClass = document.getElementsByClassName('test');
// 	// for(var i = 0; i , btnClass.length; i++) {
// 		console.log(btnClass);

// 		for (var i = 0; i < btnClass.length; i++) { //For loop through the HTML Collection (Node List?)
// 			if (btnClass[3].checked === true) { //If q1d was checked, add one to correct, else add one to wrong
// 			correct++;
// 			console.log(correct);
// 			}
// 			else {
// 				wrong++;
// 				console.log(wrong);
// 			}
// }

// element.onclick = myFunction();
// };

//Grab HTML Collection of everything with the test class name
// var btnClass = document.getElementsByClassName('test');
// 	// for(var i = 0; i , btnClass.length; i++) {
// 		console.log(btnClass);

// 		// on click submit btn 
// 		// var submit = documentgetElementbyId('btn')
// 		// on click { } // run this for loop
// 		for (var i = 0; i < btnClass.length; i++) { //For loop through the HTML Collection (Node List?)
// 			if (btnClass[3].checked === true) { //If q1d was checked, add one to correct, else add one to wrong
// 			correct++;
// 			console.log(correct);
// 			}
// 			else {
// 				wrong++;
// 				console.log(wrong);
// 			}
// 			// 'results' or span id 'whatever'.innerHTML("Answers correct " + correct </br> "Answers wrong: " + wrong);

// }


// 	}

// function loopForm(form) {
// 	var radioResults = 'Radio buttons: '
// }

// var test = document.getElementById('btn')

// btn.onclick = function formSubmit()
// var score = 0;
// // onc click run this function
// 	function formSubmit() {
// 	var correctAnswer = document.getElementById("q1a")
// 		if (correctAnswer.checked === true) {
// 			alert("Correct!")
// 			score++;
// 		}
// 		else {
// 			alert("Incorrect!")
// 			score--;
// 		}
// 	}
// var max = 5;
// var aux = new Array();
// function getCheckedValue(groupName) {
//     var radios = document.getElementsByName(groupName);
//     for (i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return radios[i].value;
//         }
//     }
//     return null;
// }
// function check() {
//     for(var i=1;i<=max;i++) {
//         //console.log(i,getCheckedValue('Q'+i));
//         aux[i-1] = getCheckedValue('Q'+i);
//     }
//     console.log(aux);
// }


// var foundIt;
// for (var i = 0; i < document.form.group1.length; i++) {
// 	if (document.form.group1[i].checked) {

// 		foundIt = document.form.group1[i].value
// 	}
// }


// var radios = document.getElementsByName('group1');

// 	for (var i = 0; length = radios.length; i < length; i++) {
// 		alert(radios[i].value);

// 		break;
// 	}
// }


	// Go out get the h2 element; declare a variable called correctAnswers and assign/set that variable to 0 (representing the number of correct answers);
// var h2 = document.querySelector('h2');
// var correctAnswers = 0; // 0 correct answers to start
// h2.textContent = correctAnswers; // set the text (number/string) that will appear in the h2 element to the number of correct answers (currently 0) 

// //
// function getAnswer() {
// 	var radio = document.querySelector('form');
// 		// for (var i = 0; i < Things.length; i++) {
// 		// 	Things[i]
// 		// }
// 		if (radio[0].checked === true) {
// 			correctAnswers++; //
// 			alert("Congrats! That answer is correct!");

// 		}
// 		h2.textContent = correctAnswers;
// }

// var btn = document.getElementById('btn');

// btn.addEventListener("click", getAnswer);

// var q1 = document.forms["quizForm"]["q1"].value;
// var q2 = document.forms["quizForm"]["q2"].value;
// var q3 = document.forms["quizForm"]["q3"].value;
// var q4 = document.forms["quizForm"]["q4"].value;
// var q5 = document.forms["quizForm"]["q5"].value;

// console.log("q1").value;

// myForm.elements.namedItem("my-radio-button-group-name").value

// alert($('input[name="q1"]:checked').val());


// var selector = document.querySelector('input[name="q1"]:checked'); 
// if(selector) console.log(selector.value);

// document.querySelector('input[name="q1"]:checked').value;

// ()