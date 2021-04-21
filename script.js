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
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber);

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
});

//withdraw button handler
const withdrawAmount = document.getElementById("withdraw-Btn");
withdrawAmount.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdraw-Input");
    console.log(withdrawNumber);

})

function getInputNumber(id) {
    const amount= document.getElementById(id).value;
    const withdrawNumber = parseFloat(amount);
    return withdrawNumber;
}

function updateSpanText(id, depositNumber) {

    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;

}