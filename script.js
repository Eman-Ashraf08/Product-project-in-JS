var nInput = document.getElementById('nInput');
var eInput = document.getElementById('eInput');
var pInput = document.getElementById('pInput');
var loginButton = document.getElementById('loginButton');

function LoginButtonField() {
    
    var name = nInput.value;
    var email = eInput.value;
    var password = pInput.value;

    
    if (name === "" || email === "" || password === "") {
        loginButton.disabled = true;
    } else {
        loginButton.disabled = false;
    }
}
nInput.addEventListener('input', LoginButtonField);
eInput.addEventListener('input', LoginButtonField);
pInput.addEventListener('input', LoginButtonField);

function myFunction() {
    var name = nInput.value;
    var email = eInput.value;
    var password = pInput.value;

    if (name === "" || email === "" || password === "") {
        alert("You have not filled the form");
    } else {
        var userData = {
            Name: name,
            Email: email,
            Password: password
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "webPage.html";
    }
}
LoginButtonField();
 
