const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});
