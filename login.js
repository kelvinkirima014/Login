// declare variables to store the value of the inputs
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkInputs();

})


function checkInputs(){
    // get the values of the inputs
    usernameValue = username.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();
    password2Value = password2.value.trim();

    if(usernameValue === ""){
        //show error
        //add error class
        setErrorFor(username,'username cannot be blank');
    }else{
        // add success class
        setSuccessFor(username)
    }
    if(emailValue === ""){
        //show error
        //add error class
        setErrorFor(email,'email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email,'email is not valid');
    }

    
    else{
        // add success class
        setSuccessFor(email);
    }
    if(passwordValue === ""){
        //show error
        //add error class
        setErrorFor(password,'password cannot be blank');
    }else{
        // add success class
        setSuccessFor(password)

}
    if (password2Value === ""){
        setErrorFor(password2,'password cannot be blank')
    }else if (password2Value !==passwordValue){
        setErrorFor(password2,'please confirm your password');
    }else{
        setSuccessFor(password2);
    }
    
   
}


// function for error handling
function setErrorFor(input, message){
const formControl = input.parentElement;//input is child of form control class
// small is child of formControl
const small = formControl.querySelector('small');
//add error message inside small
small.innerText = message;
//add error class
formControl.className = 'form-control error';

}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

