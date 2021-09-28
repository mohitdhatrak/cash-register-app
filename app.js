var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var button = document.querySelector("#button");
var errorMessage = document.querySelector("#error-message");
var totalAmount = document.querySelector("#total-amount");
var notesDisplay = document.querySelectorAll(".box");

var extraCash;
var amounts = [2000, 500, 100, 20, 10, 5, 1];
var noOfNotes = [];

function changeProcessor(amount) {
    for (var i = 0; i < amounts.length; i++) {
        noOfNotes[i] = Math.trunc(amount / amounts[i]);
        amount = amount % amounts[i];
    }

    displayNotes();
}

function displayNotes() {
    for (var i = 0; i < amounts.length; i++) {
        notesDisplay[i].innerText = noOfNotes[i];
    }
}

function clickListner() {
    for (var i = 0; i < amounts.length; i++) {
        noOfNotes[i] = 0;
    }
    displayNotes();
    errorMessage.innerText = "";
    totalAmount.innerText = "";

    extraCash = cashGiven.value - billAmount.value;

    if (cashGiven.value == "" || billAmount.value == "") {
        errorMessage.innerText = "Please enter both the values.";
    } else if (
        cashGiven.value < 0 ||
        billAmount.value < 0 ||
        Number.isNaN(extraCash)
    ) {
        errorMessage.innerText = "Please enter positive numerical values only.";
    } else if (extraCash < 0) {
        errorMessage.innerText =
            "Cash given is less than bill amount, pay more cash or do the dishes.";
    } else {
        totalAmount.innerText = extraCash;
        changeProcessor(extraCash);
    }
}

button.addEventListener("click", clickListner);
