function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector(".change-color");
const bodyColorText = document.querySelector(".color");

const onBodyColor = () => {
	document.body.style.backgroundColor = getRandomHexColor();
	bodyColorText.textContent = `${getRandomHexColor()}`;

	console.log(getRandomHexColor());
};

changeColor.addEventListener("click", onBodyColor);
