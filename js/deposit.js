// step-1:add event listener

document.getElementById("btn-submit").addEventListener("click", function () {
  const depositField = document.getElementById("total-deposite");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  const depositTotalElement = document.getElementById("deposit-total");
  const previoousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal =parseFloat(previoousDepositTotalString);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previoousDepositTotalString);

  const curentBalanceTotl = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText =curentBalanceTotl;
  depositField.value = "";
});
