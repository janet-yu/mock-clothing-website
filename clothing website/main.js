var header = document.querySelector("header");
var slideImages = document.getElementsByClassName("slide-images");
var navbar = document.querySelector("header");
$('body').css('display','none');
$('document').ready(function(){
  $('body').fadeIn();
});

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
window.onscroll = function(){scrollNav()};

function scrollNav(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
    navbar.style.top = "0";
  }
  else{
    navbar.style.top="-90px";
  }
}
slide();
