// login button even handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";
    const translationArea = document.getElementById("translation-area");
    translationArea.style.display = "block";
})

// deposit button even handler

const depositButton = document.getElementById("depositBtn");
depositButton.addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
});

//withdraw button handler

const withdrawAmount = document.getElementById("withdraw-Btn");
withdrawAmount.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance",-1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id) {

    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateSpanText(id, depositNumber) {

    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;

}