const slider = document.querySelector('.slideShow');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slidePosition = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSliderPosition() {
    slider.style.transform = `translateX(${-slidePosition * 25}%)`; // Translate based on slide width (25%)
}

function nextSlide() {
    if (slidePosition < totalSlides - 4) {
        slidePosition=slidePosition+4;
        updateSliderPosition();
    }
}

function prevSlide() {
    if (slidePosition > 0) {
        slidePosition=slidePosition-4;
        updateSliderPosition();
    }
    
}


// Get the button and popup content elements
const button = document.getElementById('loginButton');
const popupContent = document.getElementById('accountcontent');
const PopupHide=document.getElementById('accountcontent')

// Function to show the popup when hovering over the button
function showPopup() {
  popupContent.style.display = 'block';
}

// Function to hide the popup when the mouse leaves the button
function hidePopup() {
  popupContent.style.display = 'none';
}


// Add event listeners for mouse hover
button.addEventListener('mouseenter', showPopup);
PopupHide.addEventListener('mouseleave',hidePopup)

// Close the popup if the user clicks outside of it (optional)
document.addEventListener('click', function(event) {
  if (!button.contains(event.target) && !popupContent.contains(event.target)) {
    popupContent.style.display = 'none';
  }
});
