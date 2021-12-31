function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showResults(questions, quizContainer, resultsContainer){

		var answerContainers = quizContainer.querySelectorAll('.answers');

		var userAnswer = '';
		var numCorrect = 0;

		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			if(userAnswer===questions[i].correctAnswer){

				numCorrect++;	
			}
				
		}

	
		resultsContainer.innerHTML = 'score '+ numCorrect + ' / ' + questions.length;
	}

	function showQuestions(questions, quizContainer){
	
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){

			answers = [];

	
			for(letter in questions[i].answers){

				
				answers.push(
					'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
					+ '</label>'
			);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
		);
		}


		quizContainer.innerHTML = output.join('');
	}

	showQuestions(questions, quizContainer);


	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var myQuestions = [
{
	question: "India won the Lord's Test on August 16, 2021, defeating England by 151 runs. It was India's ____________ victory",
		answers: {
		a: '3',
			b: '5',
			c: '115',
			d:'4'
},
	correctAnswer: 'd'
},
{
	question: "Which of the following players won maximum gold medals in the Tokyo Olympic 2020?",
		answers: {
		a: 'Cealeb Dressel (USA)',
			b: 'Emma Mckeon (Australia)',
			c: 'Daiki Hashimoto (Japan)',
			d: 'Vitalina Batsarashkina (Russia)'
},
	correctAnswer: 'a'
},
{
	question: "Which of the following states sponsored India's Men's Hockey Team and Women's Hockey Team?",
		answers: {
		a: 'Punjab',
			b: 'Odisha',
			c: 'Haryana',
			d: 'Rajasthan'
},
	correctAnswer: 'b'
},
{
	question: "Who among the following resigned from the membership of the Viceroy’s Executive Council as a protest against Jallianwala Bagh Massacre?",
		answers: {
		a: 'C. P. Ramaswami Iyer',
			b: 'Muhammad Ali Jinnah5',
			c: 'B. N. Sarma',
			d: 'Shankaran Nair'
},
	correctAnswer: 'b'
},
{
	question: "Gandhi may die, but Gandhism will remain forever” In which session of Indian National Congress Gandhi ji said this?",
		answers: {
		a: 'Lucknow 1916',
			b: 'Nagpur 1921',
			c: 'Karachi 1931',
			d: 'Ramgarh 1940',
},
	correctAnswer: 'b'
}
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
const para = document.createElement("result");
const node = document.createTextNode("Result");
para.appendChild(node);
const element = document.getElementsByName("quizContainer");
element.appendChild(para);
localStorage.setItem("final", (para));
console.log(localStorage.getItem("final"));