
document.getElementById('cashout-btn')
    .addEventListener('click', function() {
    // console.log('click')
    // 1- get the agent num & value
    const cashoutNumInput = document.getElementById('cashout-num');
    const cashoutNum = cashoutNumInput.value;
    // console.log(cashoutNum);
    if(cashoutNum.length != 11) {
        alert('Invalid Agent Number');
        return;
    }
    // 2- get the amount, validate, convert to num
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    // console.log(cashoutAmount);
    // 3- get the current balance, validate, convert to num
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    // console.log(balance);
    // 4- calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if(newBalance < 0) {
        alert('Invalid Amount')
        return;
    }
    // console.log('new balance', newBalance);
    // 5- get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin');
    const pin = cashoutPinInput.value;
    // console.log(pin);
    if(pin === '4444') {
        // 6- 1-5 = true: show an alert > set balance
        alert('cashout successfull');
        console.log('new balance', newBalance);
        balanceElement.innerText = newBalance;
    } else {
        // 7- 1-5 = false: show an error alert > return
        alert('Invalid Pin');
        return;
    }
});