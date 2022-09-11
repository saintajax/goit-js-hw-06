const refs = {
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnClick() {
  const currentColor = getRandomHexColor();
  refs.body.style.backgroundColor = `${currentColor}`;
  refs.span.textContent = `${currentColor}`;
}
