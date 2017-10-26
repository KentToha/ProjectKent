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
				$('#Question').text(Question);
				let answer = data.results[0].correct_answer;
				console.log(answer);
				$('#choice1').text(answer)
				let incorrect_answers = data.results[0].incorrect_answers;
				$('#choice2').text(incorrect_answers[0])
				$('#choice3').text(incorrect_answers[1])
				$('#choice4').text(incorrect_answers[2])

			})
		}

	}

	$('#confirmAnswer').on('click', () => {
		let selectedAnswer = $('input:checked').next().text();
		console.log("selectedanswer : " + selectedAnswer);
		if (selectedAnswer === questions.correct_answer) {

		} else {

		}
	})
	quiz.getQuiz()
})