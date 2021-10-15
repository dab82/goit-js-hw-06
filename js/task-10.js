const refs = {
	boxesContainer: document.querySelector("#boxes"),
	buttonDestroy: document.querySelector("button[data-destroy]"),
	buttonCreate: document.querySelector("button[data-create]"),
	input: document.querySelector("input"),
};
let inputValue = 0;

const onCreateBoxes = () => {
	const boxesArray = [];
	let boxSize = 30;
	for (let i = 1; i <= inputValue; i += 1) {
		const box = document.createElement("div");
		box.style.width = `${boxSize}px`;
		box.style.height = `${boxSize}px`;
		box.style.backgroundColor = `${getRandomHexColor()}`;
		boxesArray.push(box);
		boxSize += 10;
	}
	refs.boxesContainer.append(...boxesArray);
};

const onDestroyBoxes = () => (refs.boxesContainer.innerHTML = "");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.input.addEventListener("change", (event) => {
	inputValue = event.currentTarget.value;
});
refs.buttonCreate.addEventListener("click", onCreateBoxes);
refs.buttonDestroy.addEventListener("click", onDestroyBoxes);
