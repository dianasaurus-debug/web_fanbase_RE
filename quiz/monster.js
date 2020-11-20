var myQuestions = [
	{
		image : '../assets/img/uruboros.jpg',
		question: "1. Muncul di RE games yang mana kah monster di atas?",
		answers: {
			a : "Resident Evil 4",
			b : "Resident Evil 2",
			c : "Resident Evil Darkside Chronicles",
			d : "Resident Evil Revelations"
		},
		correctAnswer: 'a'
	},
	{
		image : '../assets/img/nkuis.jpg',
		question: "2. Apakah nama dari tyrant di atas?",
		answers: {
			a : "Nemesis",
			b:  "Salazar",
			c : "Mr X",
			d : "U3"
		},
		correctAnswer: 'a'
	},
	{
		image : '../assets/img/birkins.jpg',
		question: "3. Sebelumnya, ayah dari siapakah monster di atas?",
		answers: {
			a : "Sherry Birkins",
			b:  "Ada Wong",
			c : "Jill Valentine",
			d : "Chris Redfield"
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
				'<div class="question" style="color : yellow;font-weight : bold;padding-bottom : 15px;">' + '<img src="' + questions[i].image + '" style="max-width : 350px;"><br>' + questions[i].question + '</div>'
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
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda penakluk monster di RE games' ;
		}
		else if(numCorrect<3){
			resultsContainer.innerHTML = numCorrect + ' benar dari ' + questions.length + ' soal : Anda bukan penakluk monster di RE games' ;
		}
	}
	showQuestions(questions, quizContainer);
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}