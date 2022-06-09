(function($){
    "use strict";

    var downSwiper = new Swiper(".downSwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var upSwiper = new Swiper(".upSwiper", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
          swiper: downSwiper,
        },
      });


})();