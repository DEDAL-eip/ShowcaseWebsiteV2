let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  images.forEach(img => img.style.display = 'none');
  images[index].style.display = 'block';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

showImage(currentIndex);
