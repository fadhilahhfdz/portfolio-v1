document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".slide-up");

  function checkSlide() {
    sections.forEach((section) => {
      const slideInAt =
        window.scrollY + window.innerHeight - section.clientHeight / 2;
      const isHalfShown = slideInAt > section.offsetTop;
      const isNotScrolledPast =
        window.scrollY < section.offsetTop + section.clientHeight;

      if (isHalfShown && isNotScrolledPast) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", checkSlide);
  checkSlide();
});
