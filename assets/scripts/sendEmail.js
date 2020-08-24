function sendMail(contactForm){
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("successs", response);
        },
        function(error){
            console.log("failed", error);
        });
        return false;
}
