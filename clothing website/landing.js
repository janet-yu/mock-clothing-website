var summersale = document.getElementsByClassName("summersale")[0];

summersale.addEventListener("wheel",scrollFunction);
function scrollFunction(){
  summersale.classList.add('hide');
  setTimeout(function(){
      window.location = "mainpage.html";
  },500);
  console.log("success");
}
