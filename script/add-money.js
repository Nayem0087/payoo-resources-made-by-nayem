
document.getElementById('add-money-btn')
    .addEventListener('click', function() {
        // console.log('btn click')
        // 1- get the bank account
        const bankAccount = getValueFromInput('add-money-bank');
        if(bankAccount == 'Select a Bank') {
            alert('Please Select a Bank');
            return;
        }
        // 2- get the bank account num
        const accNum = getValueFromInput('add-money-num');
        if(accNum.length != 11) {
            alert('Invalid Account Number');
            return;
        }
        // 3- get amount
        const amount = getValueFromInput('add-money-amount');
        // 4- calculate amount
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(amount);
        // console.log(newBalance);
        // 5- verify pin
        const pin = getValueFromInput('add-money-pin');
        if(pin == '4444') {
            alert(`Add Money Success from 
                ${bankAccount}
                at ${new Date()}`);
            setBalance(newBalance);
            // 1- get history-container
            const history = document.getElementById('history-container');
            // 2- create a new div
            const newHistory = document.createElement('div');
            // 3- add new div innerHTML
            newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
                Add Money Success from  ${bankAccount}, acc-num ${accNum} at ${new Date()}
            </div>
            `;
            // 4- history-container a append
            history.append(newHistory);
        } else {
            alert('Invalid Pin');
            return;
        }
    })
