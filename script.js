

// Optional counter animation if you want to animate the numbers
// Otherwise, can be removed safely
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = parseInt(counter.innerText);
      const count = +counter.innerText.replace(/\D/g, '');
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + '+';
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + '+';
      }
    };

    if (counter.innerText.includes('+')) {
      updateCount();
    }
  });
});

  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
  });
