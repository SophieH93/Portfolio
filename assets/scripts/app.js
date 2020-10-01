const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Html & Css",
				weight: 12
			},
			 {
				text: "javascript",
				weight: 7
			}, {
				text: "jquery",
				weight: 8
			}, {
				text: "bootstrap",
				weight: 11
			}, {
				text: "python",
				weight: 10
			}, {
				text: "flask",
				weight: 9
			}, {
				text: "Git/GitHub",
				weight: 10
			}, {
				text: "MongoDB",
				weight: 5.5
			},{
				text: "Jinja",
				weight: 7.5
			},{
				text: "Django",
				weight: 9
			},
			{
				text: "API's",
				weight: 6
			},
			{
				text: "JSON",
				weight: 6.5
			},{
				text: "SQL",
				weight: 6
			},
			{
				text: "Heroku",
				weight: 9
			},
				{
				text: "AWS",
				weight: 5.5
			},
			{
				text: "Stripe",
				weight: 7.8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "also teach programming to people.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();


