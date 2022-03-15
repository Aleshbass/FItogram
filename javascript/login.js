const form= document.querySelector('#login-form');
const allform= document.querySelector('.login')
const username= form['username'];
const password= form['Password'];
const remember= form['Remember-me'];
const login_button= document.getElementById('login-button')
const login_button_message= document.querySelector('.successlogin');
const UN_error= document.querySelector('#passworderror');
const Password_error= document.querySelector('#usererror');
const password_reveal= document.querySelector('.password #show');
const forgot_password= document.getElementById('forgotpassword');


let mydetails;

username.addEventListener('blur', ()=>{
    mydetails= (JSON.parse(localStorage.getItem(`username`)));
    console.log(mydetails)

});


let clear;


function nameerror(){
    let login_name= username.value;
let login_password= password.value;
if((login_name===mydetails[0].username) && (login_password===mydetails[0].password)){
    login_button_message.innerHTML= `successful login. Welcome back, ${username.value}` ;
    login_button_message.style.color= "white"
    login_button_message.style.backgroundColor="green"
    allform.style.filter='blur(1px)'
    setTimeout(function(){
        window.location.href= 'profile.html';
       }, 3000)
       return true
}

else  {
clear= setInterval(function(){
    login_button_message.textContent= `Sorry, we do not have your details`; 
    login_button_message.style.color= "white"
    login_button_message.style.backgroundColor="red"
    allform.style.filter='blur(1px)'
   }, 0)
  
   setTimeout(function(){
    
    clearInterval(clear)
    login_button_message.textContent= '';
        login_button_message.style.background="none"
        allform.style.filter='none'
   }, 3000)
   return false
}
};

function allerror(){
    let allerr= setInterval(function(){
        login_button_message.textContent= `Sorry, we do not have your details`; 
    login_button_message.style.color= "white"
    login_button_message.style.backgroundColor="red"
    allform.style.filter='blur(1px)'
       }, 0)
      
       setTimeout(function(){
        
        clearInterval(allerr)
        login_button_message.textContent= '';
        login_button_message.style.background="none"
        allform.style.filter='none'
       }, 3000)
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(mydetails==null){
        allerror();
    }

    else{
        nameerror();
    }
    password.type= "password"
})


password_reveal.addEventListener('click', (e)=>{
    e.preventDefault();

    password.type= "text"
})