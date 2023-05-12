const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "./assets/images/slideshow/slide4.jpg",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", slideLeft);
arrowRight.addEventListener("click", slideRight);

const dotContainer = document.querySelector(".dots");

let dotCount = [];

for (i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotContainer.appendChild(dot);
	dot.id = `dot${i}`;
	dotCount.push(`dot${i}`);
}

let slide = 0;

let dotSelected = document.getElementById(dotCount[slide]);
dotSelected.classList.add("dot_selected");

function slideRight() {
	if (slide != slides.length - 1) {
		slide++;
		const images = document.querySelector(".banner-img");
		images.src = slides[slide].image;
		const textes = document.querySelector("#banner p");
		textes.innerHTML = slides[slide].tagLine;
		dotSelected = document.getElementById(dotCount[slide]);
		dotSelected.classList.add("dot_selected");
		dotSelected = document.getElementById(dotCount[slide - 1]);
		dotSelected.classList.remove("dot_selected");
	} else {
		slide = 0;
		const images = document.querySelector(".banner-img");
		images.src = slides[slide].image;
		const textes = document.querySelector("#banner p");
		textes.innerHTML = slides[slide].tagLine;
		dotSelected = document.getElementById(dotCount[slide]);
		dotSelected.classList.add("dot_selected");
		dotSelected = document.getElementById(dotCount[slides.length - 1]);
		dotSelected.classList.remove("dot_selected");
	}
}

function slideLeft() {
	if (slide != 0) {
		slide--;
		const images = document.querySelector(".banner-img");
		images.src = slides[slide].image;
		const textes = document.querySelector("#banner p");
		textes.innerHTML = slides[slide].tagLine;
		dotSelected = document.getElementById(dotCount[slide]);
		dotSelected.classList.add("dot_selected");
		dotSelected = document.getElementById(dotCount[slide + 1]);
		dotSelected.classList.remove("dot_selected");
	} else {
		slide = slides.length - 1;
		const images = document.querySelector(".banner-img");
		images.src = slides[slide].image;
		const textes = document.querySelector("#banner p");
		textes.innerHTML = slides[slide].tagLine;
		dotSelected = document.getElementById(dotCount[slide]);
		dotSelected.classList.add("dot_selected");
		dotSelected = document.getElementById(dotCount[0]);
		dotSelected.classList.remove("dot_selected");
	}
}
