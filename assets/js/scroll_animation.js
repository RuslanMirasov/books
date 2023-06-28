/*
data-animation="fade-in" - вызов анимации с названием эффекта
data-repeat              - если есть, повторяет анимацию при скроле
data-delay="500"         - задержка анимации в милисекундах
*/
document.addEventListener("DOMContentLoaded", (event) => {
  // const body = document.querySelector('.body');
  const article = document.querySelector("article.page");
  if (article && article.hasChildNodes()) {
    // Таким образом, сначала мы проверяем, не пуст ли объект, есть ли у него дети
    const articleElements = article.children;

    for (var i = 0; i < articleElements.length; ++i) {
      articleElements[i].setAttribute("data-animation", "");
    }
  }

  let delay = 0;
  let windowHeight = window.innerHeight;

  const amimateElements = document.querySelectorAll("[data-animation]");
  const screenGap = 0;

  window.addEventListener("scroll", () => {
    animate();
  });
  window.addEventListener("load", () => {
    setTimeout(function () {
      animate();
    }, 500);
  });
  window.addEventListener("resize", () => {
    windowHeight = window.innerHeight;
    animate();
  });

  function animate() {
    amimateElements.forEach((element) => {
      const animationRepeat = element.dataset.repeat;
      const animationDelay = element.dataset.delay;
      const elementScrolltop = element.getBoundingClientRect().top;
      const elementScrollbottom = elementScrolltop + element.offsetHeight;
      if (animationDelay !== undefined) {
        delay = animationDelay;
      } else {
        delay = 0;
      }
      if (
        elementScrollbottom > screenGap &&
        elementScrolltop < windowHeight - screenGap
      ) {
        setTimeout(function () {
          element.classList.add("animate");
        }, delay);
      } else {
        if (animationRepeat !== undefined) {
          element.classList.remove("animate");
        }
      }
    });
  }
});
