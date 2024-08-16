///FAQ Section Code

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}









//----------------------------------------------------------------------------------------------------------------------------------------------------------//

//Quotes Js


//slideIndex is a variable that keeps track of the current slide being displayed. It starts at 1, indicating the first slide.
var slideIndex = 1;    
showSlides(slideIndex); //calling showSlides function and passing slideIndex as an argument


function plusSlides(n) {
  showSlides(slideIndex += n);
}

//function plusSlides takes 'n' as an parameter
//slideIndex += n    increments or decrements 'slideIndex's value by n
//then calls showSlides function with the updated slideIndex




function currentSlide(n) {
  showSlides(slideIndex = n);
}

//this function currentSlide(n) sets the slideIndex to n and then calls function showSlides with 'slideIndex = n' which displays the slide corresponding to n





function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//if (n > slides.length) { slideIndex = 1; }: If n parameter  is greater than the number of slides.length, reset slideIndex to 1.
//if (n < 1) { slideIndex = slides.length; }: If n is less than 1, setting slideIndex to the last slide index (slides.length). 
//for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }: Looping through all slides and sets their display style property to "none"
//for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }: Looping through all dot elements (dots array) and removing the "active" class from their className


//slides[slideIndex - 1].style.display = "block";: Displays the slide corresponding to slideIndex by setting its display style property to "block". 
//dots[slideIndex - 1].className += " active";: Adds the "active" class to the dot element corresponding to the current slide, marking it as active in the navigation.

//----------------------------------------------------------------------------------------------------------------------------------------------------------//






///Navigation JS
let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");    //toggling the class .active on .the selected element
}








//----------------------------------------------------------------------------------------------------------------------------------------------------------//



//Newsletter PopUp Js

$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}


//$ is a function name
//This function takes one parameter id, which is expected to be a string representing the ID of an HTML element.
//Inside the function document.getElementById(id) is used to retrieve the DOM element that has the specified id attribute.
//The function returns the DOM element that matches the given id.


//function "show" takes an id parameter.
//It uses the utility function $  to fetch the DOM element with the specified id.
//$(id).style.display ='block'; sets the CSS display property of the element to 'block'.

//similar with function "hide"
//$(id).style.display ='none'; sets the CSS display property of the element to 'none'.

