//login
const loginButton = document.querySelector("#submit-btn");
loginButton.addEventListener("click", loginSuccess);
function loginSuccess(){
    const loginArea = document.querySelector(".login-area");
    const transactionArea = document.querySelector(".transaction-area");
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
}

//deposit
const depositButton = document.querySelector("#deposit-btn");
depositButton.addEventListener("click", depositFunc)
function depositFunc(){
    const depositAmount = parseFloat(document.querySelector("#deposit-amount").value);
    const currentDeposit = parseFloat(document.querySelector("#current-depo").innerText);
    const totalDepo = depositAmount + currentDeposit;
    document.querySelector("#current-depo").innerHTML = totalDepo;
    const totalAmount = parseFloat(document.querySelector("#total-amount").innerText);
    const totalAfterTrans = totalAmount + depositAmount;
    document.querySelector("#total-amount").innerHTML = totalAfterTrans;
}
const withdrawButton = document.querySelector("#withdraw-btn");
withdrawButton.addEventListener("click", withdrawFunc)
function withdrawFunc(){
    const withdrawAmount = parseFloat(document.querySelector("#withdraw-amount").value);
    const currentWith = parseFloat(document.querySelector("#current-with").innerText);
    const totalWith = withdrawAmount + currentWith;
    document.querySelector("#current-with").innerHTML = totalWith;
    const totalAmount = parseFloat(document.querySelector("#total-amount").innerText);
    const totalAfterTrans = totalAmount - withdrawAmount;
    document.querySelector("#total-amount").innerHTML = totalAfterTrans;
}