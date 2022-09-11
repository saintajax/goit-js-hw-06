const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = `${fontSizeRef.value}px`;
fontSizeRef.addEventListener("input", () => {
  textRef.style.fontSize = `${fontSizeRef.value}px`;
});
