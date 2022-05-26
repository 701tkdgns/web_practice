var nav = document.querySelector('nav');
window.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        nav.classList.add('bg-dark', 'shadow');
        nav.setAttribute('style', 'opacity:0.9;');
    } else{
        nav.classList.remove('bg-dark', 'shadow');
        nav.removeAttribute('style');
    }
})