var header = document.querySelector("header");
var slideImages = document.getElementsByClassName("slide-images");
var header = document.querySelector("header");

var navBar = document.querySelector('.hover-over');
var navBarLinks = document.querySelectorAll(".hover-over li");
var navHoverLinks = document.querySelector(".hover-over li ul");
var burger = document.querySelector(".burger");


burger.onclick = function(){
  navBar.classList.toggle('show');
}
$('body').css('display','none');
$('document').ready(function(){
  $('body').fadeIn();
});

// if(window.innerWidth > 981){
//   window.onscroll = function(){scrollNav()};
//
//   function scrollNav(){
//     if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
//       header.style.top = "-65px";
//     }
//     else{
//       header.style.top = "0";
//     }
//   }
// }
// else{
//   window.addEventListener('resize', function(){
//       if(window.innerWidth > 981){
//         window.onscroll = function(){scrollNav()};
//
//         function scrollNav(){
//           if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
//             header.style.height = "100px";
//             navBarLinks.style.lineHeight = "100px";
//           }
//           else{
//             header.style.height = "60px";
//           }
//         }
//       }
//   });
// }
//

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
