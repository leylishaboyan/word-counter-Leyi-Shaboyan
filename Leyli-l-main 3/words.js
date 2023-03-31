
const userInput = document.querySelector(".userInput");
const userOutput = document.querySelector(".userOutput");
const button = document.querySelector(".button");
const propertyCounter = document.querySelector(".userOutput").children.length;
const bg = document.querySelector(".container");
const root = document.querySelector(':root');

const groupName = [
  "letter",
  "word",
  "sentence",
  "number",
  "symbol",
  "whitespace",
];

const map = new Map([
  ["letter", /([a-zA-zа-яёЁА-Я])/g],
  ["word", /(([a-zA-z]|[а-яёËА-Я])+\-([a-zA-z]|[а-яёËА-Я])+)|([a-zA-z]|[а-яёËА-Я])+/g,],
  ["sentence", /[a-zA-z[а-яА-Я\s]+(\...|\.|\!|\?)/g],
  ["number", /([-+])?((\d+[_]\d+)|(\d+[,]\d+)|(\d+[.]\d+)|(\d+))/g],
  ["symbol", /[^a-zA-zа-яёЁА-Я0-9\n\t\r\v\f\s]/g],
  ["whitespace", /(?: )/g],
]);

function countProperties() {
  for (let elem of userOutput.children) {
    elem.children[1].innerText = null;
  }
  if (!userInput.value) {
    alert("Please, enter your text");
  }
  for (let i = 0; i < propertyCounter; i++) {
    const literal = groupName[i];
    const regexp = map.get(literal);
    const output = userInput.value.match(regexp);
    if (output === null) {
      userOutput.children[i].children[1].innerText = '0';
    } else if (output.length === 1) {
      userOutput.children[i].children[1].innerText = output.length;
    } else {
      userOutput.children[i].children[1].innerText = output.length;
    }
  }
}

button.addEventListener("click", countProperties);



