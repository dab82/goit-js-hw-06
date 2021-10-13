const input = document.querySelector("#validation-input");

const valueDataLength = parseInt(input.dataset.length);

const onValidInput = (event) => {
	event.currentTarget.value.length !== valueDataLength
		? event.currentTarget.classList.add("invalid") &
		  event.currentTarget.classList.remove("valid")
		: event.currentTarget.classList.add("valid") &
		  event.currentTarget.classList.remove("invalid");
};

input.addEventListener("blur", onValidInput);
