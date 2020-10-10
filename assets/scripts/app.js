const Portfolio = (function () {
	function makeWords() {
		var words = [
			{
				text: "html",
				weight: 10,
			},
			{
				text: "css",
				weight: 9,
			},
			{
				text: "javascript",
				weight: 7,
			},
			{
				text: "jquery",

				weight: 5,
			},
			{
				text: "bootstrap",
				weight: 7,
			},
			{
				text: "python",
				weight: 7,
			},
			{
				text: "flask",
				weight: 4,
			},
			{
				text: "Git/GitHub",
				weight: 5,
			},
			{
				text: "MongoDB",
				weight: 4,
			},
			{
				text: "Jinja",
				weight: 3.5,
			},
			{
				text: "Django",
				weight: 4.5,
			},
			{
				text: "Firebase",
				weight: 6,
			},
			{
				text: "Reacjjs",
				weight: 6,
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$(".teaching-domains").jQCloud(words, { delay: 120 });
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on("scroll", function () {
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
				"am a Junior Full-Stack Web Developer.",
				"love everything about code.",
				"am based in Dublin.",
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: "text",
			callback: function () {
				$("#writing-text").css({
					color: "#fff",
					"background-color": "#C8412B",
				});
			},
			preStringTyped: function () {},
			onStringTyped: function () {},
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation,
	};
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
