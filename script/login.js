// console.log('login function')
document.getElementById('login-btn')
    .addEventListener('click', function() {
        // 1- get the mobile num input
        const inputNum = document.getElementById('input-num');
        const num = inputNum.value;
        console.log(num);
        // 2- get the pin input
        const inputPin = document.getElementById('input-pin');
        const pin = inputPin.value;
        console.log(pin);
        // 3- match num & pin 
        if(num == '01888252746' && pin == '4444') {
            // 4- 1-3 true:> alert> homepage
            alert('login success');
            // window.location.replace('/home.html');
            // window.location.assign('/home.html');
            window.location.href = "home.html";
        } else{
            // 4- 1-3 false:> alert> return
            alert('login failed');
            return;
        }
        
        
    })