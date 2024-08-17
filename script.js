document.addEventListener("DOMContentLoaded", function () {
	let carousel = document.querySelector(".carousel");
	let items = carousel.querySelectorAll(".item");
	let dotsContainer = document.querySelector(".dots");

	// Insérer des points dans le DOM
	items.forEach((_, index) => {
		let dot = document.createElement("span");
		dot.classList.add("dot");
		if (index === 0) dot.classList.add("dot_selected"); // Modifier ici pour utiliser dot_selected
		dot.dataset.index = index;
		dotsContainer.appendChild(dot);
	});

	let dots = document.querySelectorAll(".dot");

	// Fonction pour afficher un élément spécifique
	function showItem(index) {
		items.forEach((item, idx) => {
			item.classList.remove("active");
			dots[idx].classList.remove("dot_selected"); // Modifier ici pour utiliser dot_selected
			if (idx === index) {
				item.classList.add("active");
				dots[idx].classList.add("dot_selected"); // Modifier ici pour utiliser dot_selected
			}
		});
	}

	// Écouteurs d'événements pour les boutons
	document.querySelector(".prev").addEventListener("click", () => {
		let index = [...items].findIndex((item) =>
			item.classList.contains("active")
		);
		showItem((index - 1 + items.length) % items.length);
	});

	document.querySelector(".next").addEventListener("click", () => {
		let index = [...items].findIndex((item) =>
			item.classList.contains("active")
		);
		showItem((index + 1) % items.length);
	});

	// Écouteurs d'événements pour les points
	dots.forEach((dot) => {
		dot.addEventListener("click", () => {
			let index = parseInt(dot.dataset.index);
			showItem(index);
		});
	});
});
