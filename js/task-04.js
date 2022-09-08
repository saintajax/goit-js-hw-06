const counter = {
  counterValue: 0,
  increment() {
    console.log(this.counterValue);
    this.counterValue += 1;
  },

  decrement() {
    console.log(this.counterValue);
    this.counterValue -= 1;
  },
};

const onDecreaseBtnClick = document.querySelector("[data-action=decrement]");
const onIncreaseBtnClick = document.querySelector("[data-action=increment]");
const value = document.querySelector("#value");

onDecreaseBtnClick.addEventListener("click", () => {
  counter.decrement();
  value.textContent = counter.counterValue;
});

onIncreaseBtnClick.addEventListener("click", () => {
  counter.increment();
  value.textContent = counter.counterValue;
});
