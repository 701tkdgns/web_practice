const img = document.querySelector(".content_link");
img.addEventListener('click', function(e){
    if (img.getAttribute("href")==="#"){
        alert("준비중입니다.");
    }else{
        alert("접근 성공");
    }
})