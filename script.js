
var displayLetter = document.getElementById("letterReturned");
var letterBtn = document.getElementById("letterBtn");

if (letterBtn) {
  letterBtn.addEventListener("click", generateLetter);
}

function generateLetter() {
  var state = document.getElementById("state").value;
  var name = document.getElementById("name").value;
  var frustration = document.getElementById("frustration").value;

  displayLetter.innerHTML = "Dear " + state + " Senator, <br /> <br /> My name is " + name + " and, like many other citizens, I am frustrated about " + frustration + ". We need to prevent future violence to protect innocent bystanders from criminals and the mentally disturbed. Therefore, we implore you to address the current condition of our nation as a result of gun violence in order to ensure the wellbeing of the public. This can be done through the implementation of laws that will protect public safety, such as having stronger background checks and sufficient training to handle these weapons. However, these changes can only happen if Congress does something about it. I hope you take these words into consideration. <br /> <br/> Thank you for your time, <br /> " + name ;

}




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("homeSlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



  
