const images = ["https://baldevbal.github.io/dev109/midterm/images/resumeartifact.png", "https://baldevbal.github.io/dev109/finalp1/images/shoppingcartimg.png", "https://baldevbal.github.io/dev109/finalp1/images/tableimg.png"]; // Replace with your image file names
let currentIndex = 0;

const slideshowImage = document.getElementById('slideshow-image');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function updateImage() {
    slideshowImage.src = images[currentIndex];
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last image
    updateImage();
});
autoSlideInterval = setInterval(nextImage, 4500);
updateImage();
