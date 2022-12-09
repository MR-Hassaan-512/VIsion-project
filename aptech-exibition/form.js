document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    checkData();
})

// variable

var uname = document.getElementById("uname");
var sname = document.getElementById("sname");
var email = document.getElementById("email");
var number = document.getElementById("Phone");
var message = document.getElementById("msg");
var password = document.getElementById("pass");
var confirmpassword = document.getElementById("conf-pass");

// if,else,else if

function checkData(){
    var unameValue = uname.value.trim(); 
    var snameValue = sname.value.trim(); 
    var emailValue = email.value.trim();
    var numberValue = number.value.trim();
    var messageValue = message.value.trim();
   

    if(unameValue==""){
        setError(uname,"This is a required field.");
    }
    else{
        setSuccess(uname);
    }
    if(snameValue==""){
        setError(sname,"This is a required field.");
    }
    else{
        setSuccess(sname);
    }

    if(emailValue==""){
        setError(email,"This is a required field.");
    }
    else if(!isEmail(emailValue)){
       setError(email,"This is a not valid to accept.");
    }
    else{
        setSuccess(email);
    }
    if(numberValue==""){
        setError(number,"This is a required field.");
    }
    else if(numberValue .length !==11){
        setError(number,"Only 11 digit numbers are valid .");
    }
    else if(isNaN(numberValue)){
        setError(number,"Enter only Numeric values.");
    }
    else{
        setSuccess(number);
    }
    if(messageValue==""){
        setError(message,"This is a required field.");
    }
    else{
        setSuccess(message);
    }
 
}

// setError

function setError(u,msg){
var parentBox = u.parentElement;
parentBox.className="input-field error";
var span = parentBox.querySelector("span");
span.innerText=msg;
var fa = parentBox.querySelector(".fa");
fa.className = "fa fa-exclamation-circle";
}   

// setSuccess

function setSuccess(u){
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-check-circle";
}

// regular expression
function isEmail(e){
var reg=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    return reg.test(e);
}