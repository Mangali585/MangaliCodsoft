document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting Timeless Travels! We will get back to you soon.");
});

function showAlert() {
    alert("Start your journey with Timeless Travels!");
}


let index = 0;
    const totalDestinations = document.querySelectorAll('.destination').length;
    const destinationsWrapper = document.querySelector('.destinations-wrapper');

    function updateSlider() {
        const offset = index * -50; // Each slide moves 50% of the wrapper
        destinationsWrapper.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        if (index < Math.floor(totalDestinations / 2) - 1) {
            index++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (index > 0) {
            index--;
            updateSlider();
        }
    }