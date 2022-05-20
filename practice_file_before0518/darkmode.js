var dm = function () {
  var darkBtn = document.getElementById("darkbutton");
  var check = true;
  darkBtn.addEventListener("click", function () {
    if (check) {
      var bd = document.querySelector("body");
      bd.style.backgroundColor = "black";
      bd.style.color = "white";
      darkBtn.value = "WHITEMODE";
      check = false;
    } else {
      var bd = document.querySelector("body");
      bd.style.backgroundColor = "white";
      bd.style.color = "dark";
      darkBtn.value = "DARKMODE";
      check = true;
    }
  })
};
