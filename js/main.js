// JS for content editable trick from Chris Coyier
var span = document.querySelector("span");

span.addEventListener("input", function() {
	var text = this.innerText;
	this.setAttribute("data-heading", text);
	this.parentElement.setAttribute("data-heading", text);
});




// //Get the button
// var mybutton = document.getElementById("myBtn");
//
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {
//   scrollFunction()
// };
//
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
