function myFunc(){
var ul = document.getElementById("ul");
var tr = document.getElementById("tr");
    ul.classList.toggle("show");
    tr.classList.toggle("show");
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
   document.getElementById("anim").style.animation = "scroll 4s infinite";
  } else {
    document.getElementById("anim").style.animation = "initial";
  }
} 