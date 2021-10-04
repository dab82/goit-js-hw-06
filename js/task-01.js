const categories = document.querySelector("ul#categories");
console.log(
	"Number of categories (НОМЕР КАТЕГОРИИ) : ",
	categories.children.length
);
const titleElement = document.querySelectorAll(".item");
titleElement.forEach((element) => {
	console.log("Category: ", element.firstElementChild.textContent);
	console.log(
		"Elements: ",
		element.firstElementChild.nextElementSibling.children.length
	);
});
