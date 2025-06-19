
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