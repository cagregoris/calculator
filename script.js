function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText=num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num === "") {
    document.getElementById("output-value").innerText=num;
  } else {
    document.getElementById("output-value").innerText=getFormattedNumber(num);
  }
} 

function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
};

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ''));
}

let operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length; i++) {
  operator[i].addEventListener('click', function() {
    // console.log("The operator clicked: " + this.id)
  })
}

let number = document.getElementsByClassName("number");
for(let i=0; i<number.length; i++) {
  number[i].addEventListener('click', function() {
    console.log("The number clicked: " + this.id)
  })
}

