const images = ["https://baldevbal.github.io/dev109/a1/images/artione.png", "https://baldevbal.github.io/dev109/a1/images/artitwo.png", "https://baldevbal.github.io/dev109/a1/images/artithree.png", "https://baldevbal.github.io/dev109/a1/images/artifour.png", "https://baldevbal.github.io/dev109/a1/images/artifive.png"]; // Replace with your image file names
const captions = ["Artifact 1 - Resume", "Artifact 2 - Chessboard", "Artifact 3 - Rhombus", "Artifact 4 - Form Validation", "Artifact 5 - Slideshow"];
let currentIndex = 0;

const slideshowImage = document.getElementById('slideshowImage');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const caption = document.getElementById('caption');

function updateImage() {
    slideshowImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last image
    updateImage();
});
let autoSlideInterval = setInterval(nextImage, 5500);
updateImage();
