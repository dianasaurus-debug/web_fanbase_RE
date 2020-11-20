var myQuestions = [
	{
		image : '../assets/img/mercant.gif',
		question: "1. There are plenty of items that can be bought from the Merchant. Which of the following items can you not get from the Merchant?",
		answers: {
			a : "Silencer for Handgun",
			b : "Infinite Rocket Launcher",
			c : "First Aid Spray",
			d : "Scope for Mine Thrower"
		},
		correctAnswer: 'b'
	},
	{
		image : '../assets/img/u3.jpg',
		question: "2. Many enemies drop items or rewards after you beat them. Which of the following pairs of enemies give you the same reward when you kill them?",
		answers: {
			a : "U3 & Salazar",
			b: "Krauser & U3",
			c : "Saddler & Salazar",
			d : "Bitores Mendez & J.J."
		},
		correctAnswer: 'a'
	},
	{
		image : '../assets/img/leon-bg.png',
		question: "3. This game contains many weapons and many upgrade options. Which of the following statements is NOT true about the weaponry of the game?",
		answers: {
			a : "When upgraded fully, Red9 becomes the most powerful handgun in terms of firepower.",
			b:  "There are two different bowguns but Leon can use none of them.",
			c : "You cannot kill a regenerator with a weapon other than Rifle or Semi-Auto Rifle.",
			d : "Killer 7 has no exclusive upgrade."
		},
		correctAnswer: 'c'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ questions[i].answers[letter] + '<br>'
					+ '</label>'
				);
			}

			output.push(
				'<div class="question" style="color : yellow;font-weight : bold;padding-bottom : 15px;">' + '<img src="' + questions[i].image + '"><br>' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '<br></div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				answerContainers[i].style.color = 'lightgreen';
			}
			else{
				answerContainers[i].style.color = 'pink';
			}
		}
		if(numCorrect==3){
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda expert RE 4' ;
		}
		else if(numCorrect<3){
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda belum expert RE 4' ;
		}
	}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}