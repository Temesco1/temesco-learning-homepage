// Wait until the HTML page has finished loading
document.addEventListener("DOMContentLoaded", function () {

    // Find the button in the hero section
    const learningButton = document.querySelector(".button");

    // Add a click event
    learningButton.addEventListener("click", function () {

        // Find the learning section
        const learningSection = document.querySelector("#learning");

        // Smoothly scroll to the learning section
        learningSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});