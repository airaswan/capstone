// Collapsible Officers
document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(".collapsible");

  collapsibles.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});


// Scroll animation popup
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('.scroll-fade');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
});


document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar a').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
  });
});