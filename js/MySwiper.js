var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper('.best-item .swiper', {
    slidesPerView: 2,
    /* direction: getDirection(), */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
        slidesPerView: 3,  //브라우저가 480보다 클 때
        spaceBetween: 30,
        },
        768: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 5,  //브라우저가 1024보다 클 때
        spaceBetween: 50,
        },
    },
    });