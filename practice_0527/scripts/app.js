(function () {
    "use strict";

    // AOS init
    AOS.init();


    // 스크롤 시 네비게이션 바의 색상이 짙어지는 함수
    const nav = document.querySelector('.navbar');
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            nav.classList.add('bg-dark');
            nav.classList.add('active');
        } else {
            nav.classList.remove('bg-dark');
            nav.classList.remove('active');

        }
    });

    // 네비게이션 바에서 클릭한 링크로 이동시켜주는 함수
    // https://www.youtube.com/watch?v=9nh0snfJ7Ao&list=PL0rwf9i1eWpldSD0EgjaZj_J6jSeLKqQm&index=6
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });


    // 네비게이션 바의 링크 클릭시 before collapse 상태로 되돌아가는 함수 
    // 하단의 html에서 nav-item의 data-bs-toggle, data-bs-target로 실행하는 방법은 scrollspy가 실행이 안되므로 js에서 실행하는 것이 최선
    // https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
    const navLinks = document.querySelectorAll('.nav-item');
    const menuToggle = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(menuToggle);
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    });

    // 리뷰 스위퍼(스크롤)
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 5000,
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


    //로딩
    const preloader = document.getElementById('preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.style.display = 'none';
      });
    }


    // backToTop 버튼
    const gtbtn = document.querySelector('.backtotop');
    window.addEventListener("scroll", function(){
      if(window.scrollY > 700){
        gtbtn.classList.add("active");
      }else{
        gtbtn.classList.remove("active");
      }
    });

})()