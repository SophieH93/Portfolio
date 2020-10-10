function sendMail(contactForm) {
	emailjs
		.send("gmail", "Sophie Emailjs", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			project_request: contactForm.projectsummary.value,
		})
		.then(
			function (response) {
				console.log("successs", response.status, response.text);
			},
			function (error) {
				console.log("failed", error);
			}
		);
	return false;
}
