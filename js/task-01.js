const categories = document.querySelector("ul#categories");
console.log(
	"Number of categories (НОМЕРА КАТЕГОРИЙ) : ",
	categories.children.length
);
const titleElement = document.querySelectorAll(".item");
titleElement.forEach((element) => {
	console.log("Category/Категория: ", element.firstElementChild.textContent);
	console.log(
		"Elements/Элементы: ",
		element.firstElementChild.nextElementSibling.children.length
	);
});
