const refs = {
	pressPlusBtn: document.querySelector(
		'#counter > button[data-action="increment"]'
	),
	pressMinusBtn: document.querySelector(
		'#counter > button[data-action="decrement"]'
	),
	startCounter: document.querySelector("#value"),
};

let counterValue = 0;

const onMinusClick = () => {
	counterValue -= 1;
	refs.startCounter.textContent = counterValue;
};
const onPlusClick = () => {
	counterValue += 1;
	refs.startCounter.textContent = counterValue;
};
refs.pressMinusBtn.addEventListener("click", onMinusClick);
refs.pressPlusBtn.addEventListener("click", onPlusClick);
