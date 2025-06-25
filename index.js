

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    let isOpen = false;
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      isOpen = !isOpen;
      hamburger.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (isOpen) {
          navMenu.classList.remove('active');
          hamburger.innerHTML = '<i class="fas fa-bars"></i>';
          isOpen = false;
        }
      });
    });
  });

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

document.querySelectorAll('.faq-btn').forEach((btn) => {
  btn.addEventListener('click', function () {

    document.querySelectorAll('.faq-btn').forEach((b) => {
      if (b !== btn) {
        b.classList.remove('active');
        b.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        if (b.nextElementSibling) b.nextElementSibling.style.display = 'none';
      }
    });
   
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
      icon.classList.replace('fa-plus', 'fa-minus');
      if (btn.nextElementSibling) btn.nextElementSibling.style.display = 'block';
    } else {
      icon.classList.replace('fa-minus', 'fa-plus');
      if (btn.nextElementSibling) btn.nextElementSibling.style.display = 'none';
    }
  });
});


window.addEventListener("DOMContentLoaded", () => {
  const firstBtn = document.querySelector('.faq-btn');
  if (firstBtn) firstBtn.click();
});

