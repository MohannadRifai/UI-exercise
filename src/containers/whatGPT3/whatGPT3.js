const items = document.querySelectorAll('.gpt3__whatgpt3');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated-item');
      observer.unobserve(entry.target);
    }
  });
});

items.forEach(item => {
  observer.observe(item);
});
