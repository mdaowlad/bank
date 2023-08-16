// step =1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
// step=2: get the email adress inside the email input filed
// always remember to use the .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step-3: get password
// 3-a: aset id on the html element
// 3-b: get the element
// 3-c: get the value from the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;

// danger: not use this 
// step-4: verify the email and password
if(email === 'mdaowlad99@gmail.com' && password === '112233'){
    window.location.href = 'bank.html';
}
else{
    alert('wrong password')
}
})