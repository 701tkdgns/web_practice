// const navSlide = function () {
//   const menu = document.querySelector(".menu");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   var check = true;

//   menu.addEventListener("click", function () {
//     if (check) {
//       menu.textContent = "close";
//       check = false;
//     } else {
//       menu.textContent = "menu";
//       check = true;
//     }
//     nav.classList.toggle("nav-active");

//     navLinks.forEach(function (link, index) {
//         if (link.style.animation) {
//           link.style.animation = "";
//         } else {
//           link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
//         }
//       });

//       menu.classList.toggle('toggle');

//   });


// };

// navSlide();



// 네비게이션 바의 메뉴 클릭시 원하는 위치로 이동시켜주는 함수
// https://www.youtube.com/watch?v=9nh0snfJ7Ao&list=PL0rwf9i1eWpldSD0EgjaZj_J6jSeLKqQm&index=6
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
    });
});


// 네비게이션 바의 메뉴 클릭시 네비게이션 네비게이션 바 사라지는 함수
// https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNavAltMarkup');
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
});

