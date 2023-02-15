const getForm = document.querySelector(".login-form");
console.log(getForm);


getForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    const objectForm = {
        Email: email.value,
        Password: password.value
    }
    console.log(objectForm);
    event.currentTarget.reset()
});
