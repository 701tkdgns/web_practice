(function(){
    "use strict";
    
    //AOS init
    AOS.init({
        once:true
    });

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
    // https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });



    // About 스위퍼
    var swiper = new Swiper(".aboutSwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".aboutSwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });



    // 리뷰 스위퍼
    var reviewSwiper = new Swiper(".reviewSwiper",{
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        navigation:true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        Response:{
          1000:{
            navigation:true,
          }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 포트폴리어 필터
    $(document).ready(function(){
        $(".project-filter-button").click(function(){
          const value = $(this).attr('data-filter');
  
          if(value == "all"){
            $(".filter").show('1000');
          }
          else{
            $(".filter").not('.'+value).hide('3000');
            $(".filter").filter('.'+value).show('3000');
          }
        });
        $('.project-filter-button').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
        });
      });
  

    // 링크없는 포트폴리오 클릭 시 경고 알림창 출력
    $(document).ready(function(){
        $(".gallery_product a").click(function(){
            if(this.getAttribute("href")=="#"){
                alert("준비중");
            }
        })
    });

})();

