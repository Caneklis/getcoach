$(document).ready(function () {
  $(".slider__list").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    mobileFirst: true,
    prevArrow: `<button type="button" class="slick-prev  slider__prev-btn">
    <span class="visually-hidden">Предыдущий слайд</span>
    <svg viewBox="0 0 30 45" class="slider__icon">
      <use xlink:href="/img/sprite.svg#icon-arrow-prev"></use>
    </svg>
    </button>`,
    nextArrow: `<button type="button" class="slick-next  slider__next-btn"><span class="visually-hidden">Следующий слайд</span>
    <svg viewBox="0 0 30 45" class="slider__icon">
      <use xlink:href="/img/sprite.svg#icon-arrow-next"></use>
    </svg></button>`,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    fade: true,
    focusOnSelect: true,
    mobileFirst: true,
    prevArrow: `<button type="button" class="slick-prev  reviews__slider-prev-btn">
    <span class="visually-hidden">Предыдущий слайд</span>
    <svg viewBox="0 0 30 45" class="reviews__slider-icon">
      <use xlink:href="/img/sprite.svg#icon-arrow-prev"></use>
    </svg>
    </button>`,
    nextArrow: `<button type="button" class="slick-next  reviews__slider-next-btn"><span class="visually-hidden">Следующий слайд</span>
    <svg viewBox="0 0 30 45" class="reviews__slider-icon">
      <use xlink:href="/img/sprite.svg#icon-arrow-next"></use>
    </svg></button>`,
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // function changeFoooterPosition() {
  //   var footer = $(".footer");
  //   var reviewsBlock = $(".reviews");
  //   footer.css({ marginTop: -footer.height() - 37 * 2 });
  //   reviewsBlock.css({ paddingBottom: footer.height() + 74 });
  // }

  // changeFoooterPosition();

  // window.onresize = function (event) {
  //   changeFoooterPosition();
  // };

  // window.on("resize", changeFoooterPosition());
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

(() => {
  const menuButton = document.querySelector(".main-nav__toggle");
  const menuList = document.querySelector(".main-nav__list");

  menuButton.addEventListener("click", () => {
    let expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
    menuButton.classList.toggle("main-nav__toggle--open");
    menuList.classList.toggle("main-nav__list--open");
  });
})();
