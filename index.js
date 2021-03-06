/** @format */
//Deposit
let depositValue = document.getElementById("deposit-value");
let depositOutput = document.getElementById("deposit-output");
//Withdraw
let withdrawValue = document.getElementById("withdraw-value");
let withdrawOutput = document.getElementById("withdraw-output");
//Total Balance
let balanceOutput = document.getElementById("balance-output");

function addMoney(currentAmount, newAmount) {
  return Number(currentAmount) + Number(newAmount);
}
function getMoney(currentAmount, newAmount) {
  return Number(currentAmount) - Number(newAmount);
}

function deposit() {
  const totalBalance = addMoney(depositOutput.innerText, depositValue.value);
  depositOutput.innerText = totalBalance;
  balanceOutput.innerText = totalBalance;
  depositValue.value = "";
}

//addMoney is common here
function withdraw() {
  const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
  withdrawOutput.innerText = totalWithdraw;

  const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
  balanceOutput.innerText = totalBalance;
  withdrawValue.value = "";
}
