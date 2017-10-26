$(document).ready(() => {

	let quiz = {
		getQuiz: function () {
			console.log("Loading quiz");
			let url = "https://opentdb.com/api.php?amount=4&category=21&type=multiple";
			$.getJSON(url, function (data) {
				console.log("Retrieved quiz");
				console.log(data);
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
	let viewQuestions = {

	}
	

		quiz.getQuiz()
	})