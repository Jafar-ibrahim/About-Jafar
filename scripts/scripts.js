window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function togglemenu(){
    document.getElementById("primary-nav").classList.toggle("show");
}
x=document.getElementById("hamburgerBtn");
x.onclick=togglemenu;