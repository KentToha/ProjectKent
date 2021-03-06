$(document).ready(() => {
	let question = [];
	let quiz = {
		getQuiz: function () {
			console.log("Loading quiz");
			let url = "https://opentdb.com/api.php?amount=4&category=21&type=multiple";
			$.getJSON(url, function (data) {
				console.log("Retrieved quiz");
				console.log(data);
				questions = data.results
				let Question = data.results[0].question;
				console.log(Question);
				$('#Question').html(Question);
				let answer = Math.floor(Math.random() * 4);
				console.log("Picked to be correct: " + answer);
				for (i = 0; i < 4; i++) {
					if (answer == i) {
						$("#choice" + i).html(data.results[0].correct_answer);
					} else {
						$("#choice" + i).html(data.results[0].incorrect_answers.pop());
					}
				}	
				$("#newQuestion").text('Questions Answered: ' + currentQuestion + '/10');
				$("#score").text('Your score: ' + score + '/10');
			})
		}
	}
	let score = 0;
	$('#nextQuestion').hide();
	$('#confirmAnswer').on('click', () => {
		let selectedAnswer = $('input:checked').next().text();
		console.log("selectedanswer : " + selectedAnswer);
		if (selectedAnswer === questions[0].correct_answer) {
			score++;
			$("#score").text(`Correct! ${score} /10`);
			$("#confirmAnswer").hide();
			$("#nextQuestion").show();
		} else {
			$("#score").text(`Incorrect ${score} /10` );
			$("#confirmAnswer").hide();
			$("#nextQuestion").show();
		}
	})
	let currentQuestion = 0;
	$("#retry").hide();
	$("#nextQuestion").on('click', () => {
		currentQuestion++;
		console.log(currentQuestion);
		quiz.getQuiz();
		$("#nextQuestion").hide();
		$("#confirmAnswer").show();
		if (currentQuestion >= 10) {
			$("#score").text(`You have completed the quiz. Your score is: ${score} / 10. Well done!`);
			$("#questions").hide();
			$("#Question").hide();
			$("#confirmAnswer").hide();
			$("#newQuestion").hide();
			$("#retry").show();
		} else {

		}
	})
	$("#retry").on('click', () => {
		$("#questions").show();
		$("#newQuestion").show();
		$("#Question").show();
		(currentQuestion) = 0;
		(score) = 0;
		$("#retry").hide();
		$("#confirmAnswer").show();
		quiz.getQuiz()
	})

	quiz.getQuiz()
})