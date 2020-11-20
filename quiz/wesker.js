var myQuestions = [
	{
		image : '../assets/img/weskerre1.png',
		question: "1. Alber Wesker is the former agent of?",
		answers: {
			a : "STARS",
			b : "USBC",
			c : "RPD",
			d : "FBI"
		},
		correctAnswer: 'a'
	},
	{
		image : '../assets/img/weskerre5.png',
		question: "2. Albert Wesker merupakan Boss utama di game RE apa?",
		answers: {
			a : "Resident Evil 5",
			b: "Resident Evil Code Veronica",
			c : "Resident Evil 4",
			d : "Resident Evil Umbrella Chronicles"
		},
		correctAnswer: 'a'
	},
	{
		image : '../assets/img/weskerre4.jpg',
		question: "3. Albert Wesker bekerja sama dengan siapakah di Resident Evil 4?",
		answers: {
			a : "Jill Valentine",
			b:  "Ada Wong",
			c : "Nicholai",
			d : "Sherry Birkin"
		},
		correctAnswer: 'b'
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
				'<div class="question" style="color : yellow;font-weight : bold;padding-bottom : 15px;">' + '<img src="' + questions[i].image + '" style="max-width : 250px;"><br>' + questions[i].question + '</div>'
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
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda pecinta Wesker di RE games' ;
		}
		else if(numCorrect<3){
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda belum pecinta Wesker di RE games' ;
		}
	}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}