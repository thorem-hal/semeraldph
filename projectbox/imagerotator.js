    // Get the modal
var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName("img1");
var modalImg = document.getElementById("img01");
var tag = document.getElementById("tag");
var currentSlide = 0;

for (let i = 0; i < img.length; i++){
img[i].onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  currentSlide = i;
  arrowOpacity();
  modalexists == True;
}
img[i].onmouseover = function(){
  document.getElementsByClassName("tag")[i].style.display = "block";
}
img[i].onmouseout = function(){
  document.getElementsByClassName("tag")[i].style.display = "none";
}
}
    // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalexists == False;
}

next.onclick = function() {
  modalImg.src = img[currentSlide+1].src;
  currentSlide = currentSlide+1;
  arrowOpacity();
}

prev.onclick = function() {
  modalImg.src = img[currentSlide-1].src;
  currentSlide = currentSlide-1;
  arrowOpacity();
}
function arrowOpacity() {
if (currentSlide == 0) {
   prev.style.opacity = "0.5";
   next.style.opacity = "1";
} 
else if (currentSlide == 8){
   prev.style.opacity = "1";
   next.style.opacity = "0.5";
}
else{
   prev.style.opacity = "1";
   next.style.opacity = "1"; 
}}
