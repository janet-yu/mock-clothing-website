var header = document.querySelector("header");
var slideImages = document.getElementsByClassName("slide-images");
var header = document.querySelector("header");

var navBar = document.querySelector('.hover-over');
var navBarLinks = document.querySelectorAll(".hover-over li");
var navHoverLinks = document.querySelector(".hover-over li ul");
var burger = document.querySelector(".burger");
var dropDownNav = document.querySelectorAll(".has-drop");

var logo = document.querySelector(".logo");
$('body').css('display','none');
$('document').ready(function(){
  $('body').fadeIn();
});
if(window.innerWidth < 400){
  logo.setAttribute("src","images/minlogo.png");
  logo.style.width = "80px";
}
window.addEventListener('resize', function(){if(window.innerWidth < 400){
  logo.setAttribute("src","images/minlogo.png");
  logo.style.width = "80px";
}
else{
  logo.setAttribute("src","images/styleright.png")
  logo.style.width = "10rem";
}})


burger.onclick = function(){
  navBar.classList.toggle('show');
}
for(let i = 0; i<dropDownNav.length;i++){
  dropDownNav[i].addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector("#"+dropDownNav[i].id+" ul").classList.toggle("dropContent");
    document.querySelectorAll(".link-bg")[i].classList.toggle("color");
  })
}

var slideIndex = 0;
function slide(){
  for(let i = 0; i<slideImages.length; i++){
    slideImages[i].style.display = "none";
  }
  if(slideIndex >= slideImages.length){
    slideIndex = 0;
  }
  slideImages[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(slide,2000);
}

slide();
