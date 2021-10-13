const input = document.querySelector("#font-size-control");

const abra = document.querySelector("#text");

const onSlider = () => {
	abra.style.fontSize = `${input.value}` + "px";
};

input.addEventListener("input", onSlider);
