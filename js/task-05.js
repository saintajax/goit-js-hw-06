const inputRef = document.querySelector("#name-input");
let spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", () => {
  if (inputRef.value.trim() !== "") {
    spanRef.textContent = inputRef.value.trim();
  } else {
    spanRef.textContent = "Anonymous";
  }
});
