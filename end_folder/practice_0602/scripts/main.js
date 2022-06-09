(function(){
    "use strict";
    
    //AOS init
    AOS.init({
        once:true
    });

    // 스크롤 시 네비게이션 바의 색상이 짙어지는 함수
    // 하단 홈버튼
    const nav = document.querySelector('.navbar');
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            nav.classList.add('bg-dark');
            nav.classList.add('active');
        } 
        else {
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
        speed: 900,
        navigation:false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // Responsive:{
        //   1000:{
        //     navigation:true,
        //   }
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },


    });

    // 포트폴리오 필터

    //  .ready()는 DOM(Document Object Model)이 완전히 불러와지면 실행되는 Event입니다.
    // 일반적으로 브라우저가 HTML을 보여주기 위해서는 먼저 문서 구조를 만들고
    // 만들어진 문서 구조 위에 디자인을 입히는 형식을 취합니다.
    // 이 과정에서 디자인이 입혀지지 않은 상태로 문서 구조가 만들어진 시점에 실행되는 Event가 바로. ready()입니다.
    // 출처: https://7942yongdae.tistory.com/77 [프로그래머 YD:티스토리]
    
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
    // $(document).ready(function(){
    $(function(){
        $(".gallery_product a").click(function(e){
            if(this.getAttribute("href")=="#"){
              e.preventDefault();
              alert("준비중");
            }
        })
    });

    // 로딩
    let preloader = document.getElementById('Preloader');
    if(preloader){
      window.addEventListener('load', function(e){
        e.preventDefault();
        preloader.style.display = 'none';
      });
    }


    // 홈 버튼
    const gototopbtn = document.querySelector('.backtotop');
    window.addEventListener("scroll", function(){
      if(this.window.scrollY > 800){
        gototopbtn.classList.add("show");
      } else{
        gototopbtn.classList.remove("show");
      }
    })

})();

