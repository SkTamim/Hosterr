const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".mobile_menu_links");
const links = document.querySelectorAll(".mobile_menu_links li");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open");
	links.forEach((link) => {
		link.classList.toggle("fade");
	});
	hamburger.classList.toggle("active");
});
