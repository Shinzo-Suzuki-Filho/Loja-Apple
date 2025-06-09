document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const dots = document.querySelectorAll('.dot');
  const numberIndicator = document.querySelector('.numbers');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let currentIndex = 0;
  const totalItems = items.length;

  function updateCarousel(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    numberIndicator.textContent = (index + 1).toString().padStart(2, '0');
    currentIndex = index;
  }

  prevBtn.addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = totalItems - 1;
    updateCarousel(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= totalItems) newIndex = 0;
    updateCarousel(newIndex);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      updateCarousel(i);
    });
  });

  // Initialize carousel
  updateCarousel(0);
});
