const formSubmit = document.querySelector(".login-form");

const onSubmitForm = (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("А ну не балуйся и заполни все поля!");
	}

	console.log(`Email: ${email.value}, Password: ${password.value}`);
	event.currentTarget.reset();
};

formSubmit.addEventListener("submit", onSubmitForm);
