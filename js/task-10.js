const api = {
  stepSize: 10,
  boxCounter: 0,
  refs: {
    input: document.querySelector('[type="number"]'),
    createBtn: document.querySelector("[data-create]"),
    destrBtn: document.querySelector("[data-destroy]"),
    boxesDiv: document.querySelector("#boxes"),
  },

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  createBoxes() {
    let amountNumber = Number(this.refs.input.value);
    let counter = 0;
    let boxesMarkup = [];
    for (var i = this.boxCounter; i < amountNumber + this.boxCounter; i += 1) {
      boxesMarkup.push(
        `<div style="width:${30 + this.stepSize * i}px; height:${
          30 + this.stepSize * i
        }px; background : ${this.getRandomHexColor()}; outline: 1px solid black;" ></div>`
      );
      counter += 1;
    }
    this.boxCounter += counter;
    console.log(this);
    this.refs.boxesDiv.insertAdjacentHTML("beforeend", boxesMarkup.join(""));
  },

  destroyBoxes() {
    this.refs.boxesDiv.innerHTML = "";
    this.boxCounter = 0;
  },
};

api.refs.createBtn.addEventListener("click", api.createBoxes.bind(api));

api.refs.destrBtn.addEventListener("click", api.destroyBoxes.bind(api));
