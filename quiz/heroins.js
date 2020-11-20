var myQuestions = [
	{
		image : '../assets/img/becca.jpg',
		question: "1. Who are the heroins in Resident Evil are S.T.A.R.S agents?",
		answers: {
			a : "Jill Valentine and Ada Wong",
			b : "Ada Wong and Claire Redfield",
			c : "Helena and Sherry Birkins",
			d : "Rebecca Chambers and Jill Valentine"
		},
		correctAnswer: 'd'
	},
	{
		image : '../assets/img/res5.jpg',
		question: "2. Ada Wong exists in which Resident Evil Games?",
		answers: {
			a : "Resident Evil 3, 5, and 6",
			b: "Resident Evil Code Veronica, Resident Evil 2, Resident Evil 4",
			c : "Resident Evil 2, 4 and 6",
			d : "Resident Evil Umbrella Chronicles and Resident Evil 7"
		},
		correctAnswer: 'c'
	},
	{
		image : '../assets/img/re3.jpg',
		question: "3. In Resident Evil 3, who is the iconic heroin in there?",
		answers: {
			a : "Jill Valentine",
			b:  "Ada Wong",
			c : "Sherry Birkins",
			d : "Helena"
		},
		correctAnswer: 'a'
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
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda pecinta heroins di RE games' ;
		}
		else if(numCorrect<3){
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda bukan pecinta heroins di RE games' ;
		}
	}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}