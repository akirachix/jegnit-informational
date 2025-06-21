const wrapper = document.getElementById('testimonialWrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const cards = Array.from(wrapper.children);
cards.forEach(card => {
  const clone = card.cloneNode(true);
  wrapper.appendChild(clone);
});
function getScrollAmount() {
  const card = wrapper.querySelector('.testimonial-card');
  const gap = parseInt(getComputedStyle(wrapper).gap) || 20;
  return card.offsetWidth + gap;
}
let currentIndex = 0;
const totalCards = cards.length;
nextBtn.addEventListener('click', () => {
  currentIndex++;
  wrapper.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  if (currentIndex >= totalCards) {
    setTimeout(() => {
      wrapper.scrollTo({ left: 0 });
      currentIndex = 0;
    }, 500); 
  }
});
prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
  
    wrapper.scrollTo({
      left: getScrollAmount() * totalCards,
      behavior: 'instant'
    });
    currentIndex = totalCards;
  }
  currentIndex--;
  wrapper.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});
