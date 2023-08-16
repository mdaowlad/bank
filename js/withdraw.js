document.getElementById('submited-two').addEventListener('click', function(){
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawString = withdrawField.value
    const newWithdraw = parseFloat(newWithdrawString);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const priviousWithdrawTotalString = withdrawTotalElement.innerText;
    const priviousWithdrawTotal = parseFloat(priviousWithdrawTotalString);
    const currentWithdrawTotal = priviousWithdrawTotal + newWithdraw;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal - newWithdraw;
    balanceTotalElement.innerText = newBalanceTotal;
    withdrawField.value = '';
})