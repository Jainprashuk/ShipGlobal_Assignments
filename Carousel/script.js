// Initialize the current slide index to 0 (first slide)
let currentSlide = 0;

// Select all image elements within the container
const slides = document.querySelectorAll('.images img');

// Get the total number of slides
const totalSlides = slides.length;

// Select the next and previous buttons
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Select the indicators container where the indicators will be placed
const indicators = document.querySelector('.indicators');

// Create an indicator for each slide and append it to the indicators container
slides.forEach((ele, index) => {
    const indicator = document.createElement('div');
    
    // Add a click event listener to each indicator that navigates to the corresponding slide
    indicator.addEventListener('click', () => goToSlide(index));
    
    // Append the indicator element to the indicators container
    indicators.appendChild(indicator);
});

// Function to update the active indicator based on the current slide
function updateIndicators() {
    // Iterate through all indicators
    document.querySelectorAll('.indicators div').forEach((indicator, index) => {
        // If the indicator corresponds to the current slide, add the 'active' class
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            // Otherwise, remove the 'active' class
            indicator.classList.remove('active');
        }
    });
}

// Function to show the slide at the given index
function showSlide(index) {
    // Calculate the offset for the slide transition (each slide is 100% of the container width)
    const offset = -index * 100;

    // Apply the transform to move the inner container to the correct position
    document.querySelector('.inner-container').style.transform = `translateX(${offset}%)`;

    // Update the indicators to reflect the current slide
    updateIndicators();
}

// Function to navigate to a specific slide based on the given index
function goToSlide(index) {
    // Update the current slide index
    currentSlide = index;

    // Show the slide at the updated index
    showSlide(currentSlide);
}

// Function to navigate to the next slide
function nextSlide() {
    // Update the current slide index, wrapping around if necessary
    currentSlide = (currentSlide + 1) % totalSlides;

    // Show the slide at the updated index
    showSlide(currentSlide);
}

// Function to navigate to the previous slide
function prevSlide() {
    // Update the current slide index, wrapping around if necessary
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;

    // Show the slide at the updated index
    showSlide(currentSlide);
}

// Attach click event listeners to the next and previous buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initially display the first slide and activate the corresponding indicator
showSlide(currentSlide);
