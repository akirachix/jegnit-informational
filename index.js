const wrapper = document.getElementById('testimonialWrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let scrollAmount = 0;
nextBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: 270, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: -270, behavior: 'smooth' });
});