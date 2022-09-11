const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email;
  const password = formElements.password;
  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені");
  }
  const userData = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    userData.name = name;
    userData.value = value;
  });

  console.log(userData);
  event.currentTarget.reset();
  return userData;
}
