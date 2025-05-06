const images = document.querySelectorAll('.carousel img');
let current = 0;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

images[current].classList.add('active');
setInterval(showNextImage, 5000); // Change image every 5 seconds

