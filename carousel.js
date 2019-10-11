var carousel = document.getElementById("carousel");
var totalCarousel = carousel.children.length;
var index = 0;


next = document.getElementById("suivant");

prev = document.getElementById("precedent");

// Vous aurez besoin de ce genre de choses :
// $carousel.style.borderColor = "#f00";


function suivant() {  
	
	if (index >= 3) {
		index = 0;				
		for (var i = 0 ; i < totalCarousel ; i++) {
			carousel.children[i].style.display = "inline-block";
		}
	}

	else {
		carousel.children[index].style.display = "none";
		index++;
	}

console.log(index);
}


next.onclick = suivant;


function precedent() {

	console.log(index);

	if (index == 0) {
		index = 3;
		for (var i = 0 ; i < (totalCarousel-1) ; i++) {	
			carousel.children[i].style.display = "none";
		}
	}

	else {
		index--;	
		carousel.children[index].style.display = "inline-block";	
	}

	console.log(index);

}


prev.onclick = precedent;
