var carousel = document.getElementById("carousel");
var totalCarousel = carousel.children.length;
var currentSlide = carousel.children[0];
var index = 0;


next = document.getElementById("suivant");

prev = document.getElementById("precedent");

// Vous aurez besoin de ce genre de choses :
// $carousel.style.borderColor = "#f00";


function suivant() {  

	carousel.children[index].style.display = "none";
	index++;

	for (i = 0 ; i < totalCarousel ; i++) {
		if (index == carousel.children.length) {
			index = 0;
			carousel.children.style.display = "block";
			carousel.children[index].style.display = "none";
			index++;
		}

	}

console.log(carousel.children[index]);

}


next.onclick = suivant;
prev.onclick = precedent;