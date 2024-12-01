const images = ["https://baldevbal.github.io/dev109/a5/images/artione.png", "https://baldevbal.github.io/dev109/a5/images/artitwo.png", "https://baldevbal.github.io/dev109/a5/images/artithree.png", "https://baldevbal.github.io/dev109/a5/images/artifour.png", "https://baldevbal.github.io/dev109/a5/images/artifive.png"];

const captions = ["Artifact 1 - Resume<br>The introduction artifact. The code only consists of HTML and basic text formatting.", 
                  "Artifact 2 - Chessboard<br>First artifact with CSS and styling.", 
                  "Artifact 3 - Rhombus<br>Use of Javascript to recieve inputs and turn it into a Rhombus.", 
                  "Artifact 4 - Form Validation<br>A form where the user inputs things like their name and email and it checks if it validates.", 
                  "Artifact 5 - Slideshow<br>This artifact (what you're using now) uses Javascript to change things on the webpage without a opening a new webpage."];
let currentIndex = 0;

const slideshowImage = document.getElementById('slideshowImage');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const caption = document.getElementById('caption');

function updateImage() {
    slideshowImage.src = images[currentIndex];
    caption.innerHTML = captions[currentIndex];
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
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});
let autoSlideInterval = setInterval(nextImage, 5500);
updateImage();
