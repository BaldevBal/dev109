const images = ["https://baldevbal.github.io/dev109/midterm/images/resumeartifact.png", "https://baldevbal.github.io/dev109/finalp1/images/shoppingcartimg.png", "https://baldevbal.github.io/dev109/finalp1/images/tableimg.png"]; // Replace with your image file names
const captions = ["Hello, Artifact 1", "Hello, Artifact 2", "Hello, Artifact 3"];
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
