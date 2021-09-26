var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var button = document.querySelector("#button");
var box2000 = document.querySelector("#box-2000");
var box500 = document.querySelector("#box-500");
var box100 = document.querySelector("#box-100");
var box20 = document.querySelector("#box-20");
var box10 = document.querySelector("#box-10");
var box5 = document.querySelector("#box-5");
var box1 = document.querySelector("#box-1");
var errorMessage = document.querySelector("#error-message");
var extraCash;
var change2000 = 0;
var change500 = 0;
var change100 = 0;
var change20 = 0;
var change10 = 0;
var change5 = 0;
var change1 = 0;

function changeProcessor(amount) {
    while (amount !== 0) {
        if (amount >= 2000) {
            change2000 = Math.trunc(amount / 2000);
            amount = amount % 2000;
        } else if (amount >= 500) {
            change500 = Math.trunc(amount / 500);
            amount = amount % 500;
        } else if (amount >= 100) {
            change100 = Math.trunc(amount / 100);
            amount = amount % 100;
        } else if (amount >= 20) {
            change20 = Math.trunc(amount / 20);
            amount = amount % 20;
        } else if (amount >= 10) {
            change10 = Math.trunc(amount / 10);
            amount = amount % 10;
        } else if (amount >= 5) {
            change5 = Math.trunc(amount / 5);
            amount = amount % 5;
        } else if (amount >= 1) {
            change1 = Math.trunc(amount / 1);
            amount = amount % 1;
        }
    }
    box2000.innerText = change2000;
    box500.innerText = change500;
    box100.innerText = change100;
    box20.innerText = change20;
    box10.innerText = change10;
    box5.innerText = change5;
    box1.innerText = change1;
}

function clickListner() {
    change2000 = 0;
    change500 = 0;
    change100 = 0;
    change20 = 0;
    change10 = 0;
    change5 = 0;
    change1 = 0;
    errorMessage.innerText = "";
    extraCash = cashGiven.value - billAmount.value;
    if (cashGiven.value < 0 || billAmount.value < 0) {
        errorMessage.innerText = "Please enter positive values only";
    } else if (extraCash < 0) {
        box2000.innerText = change2000;
        box500.innerText = change500;
        box100.innerText = change100;
        box20.innerText = change20;
        box10.innerText = change10;
        box5.innerText = change5;
        box1.innerText = change1;
        errorMessage.innerText =
            "Cash given is less than bill amount, pay more cash or do the dishes";
    } else {
        changeProcessor(extraCash);
    }
}

button.addEventListener("click", clickListner);
