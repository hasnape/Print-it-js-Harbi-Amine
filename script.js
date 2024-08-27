document.addEventListener("DOMContentLoaded", function () {
	let items = document.querySelectorAll(".item");
	let dotsContainer = document.querySelector(".dots");
	let currentIndex = 0;

	// Créer les points
	for (let i = 0; i < items.length; i++) {
		let dot = document.createElement("span");
		dot.className = "dot";
		dotsContainer.appendChild(dot);

		// Ajouter un événement pour chaque point
		dot.addEventListener("click", function () {
			currentIndex = i; // Mettre à jour l'index
			updateCarousel();
		});
	}

	let dots = document.querySelectorAll(".dot");

	// Fonction pour mettre à jour le carrousel
	function updateCarousel() {
		// Masquer tous les éléments et enlever la sélection des points
		items.forEach((item, index) => {
			item.style.display = index === currentIndex ? "block" : "none";
			dots[index].classList.toggle("dot_selected", index === currentIndex);
		});
	}

	// Initialiser l'affichage
	updateCarousel();

	// Bouton "Suivant"
	document.querySelector(".next").addEventListener("click", function () {
		currentIndex = (currentIndex + 1) % items.length;
		updateCarousel();
	});

	// Bouton "Précédent"
	document.querySelector(".prev").addEventListener("click", function () {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
		updateCarousel();
	});
});
