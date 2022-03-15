
const showerr= document.querySelector('.password #show');
const showerror= document.querySelector('#show-two');
const form= document.querySelector('#signup-form');
let allform= document.querySelector('.signup');
const username= form['fitgram-username'];
const email= form['email'];
const password= form['Password'];
const confirm_password= form['confirmpassword'];
const remember= form['Remember-me'];
const signup_button= document.getElementById('signup-button')
const error_message= document.querySelector('.error-message');
const signup_message= document.querySelector('.signup-message');
const password_reveal= document.querySelector('#reveal-password');

let passwordReg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$%#*&@])[A-Za-z\d#^$%&*@]{8,}$/; 
form.addEventListener('submit', signup); 
let formerror;
let error;


confirm_password.addEventListener('blur', Mypassword);

// confirm_password.addEventListener('input', Mypassword);
// confirm_password.addEventListener('focus', Mypassword);
password.addEventListener('focus', password_check);
password.addEventListener('input', password_check);



password_reveal.addEventListener('click', (e)=>{
    e.preventDefault();

    password.type= "text"
    confirm_password.type="text"
});




function confirmpass(){
    
    if(password.value!==confirm_password.value){
    
  showerror.innerHTML=`Your password doesn't match`;
  showerror.classList.add('active')
       showerror.style.color='white'
       showerror.style.margin="5px 0"
        showerror.style.backgroundColor='red'
        showerror.style.fontWeight='700'

   
        confirm_password.style.border='3px solid red';
        password.style.border='3px solid red'
       
      
       return false
    }
    

    else{
        showerror.innerHTML=`Your password matches`;
        showerror.classList.add('active')
        showerror.style.color='white'
        showerror.style.margin="5px 0"
         showerror.style.backgroundColor='green'
        confirm_password.style.border='3px solid green';
        password.style.border='3px solid green'
        showerror.style.fontWeight='700'

    };
}


function Mypassword(){

 error = setInterval(() => {
  ;
    confirmpass();
 }, 0); 

 setTimeout(() => {
    
     clearInterval(error);
     showerror.classList.remove('active')
     showerror.innerHTML=' ';
     showerror.style.margin="0"
      showerror.style.backgroundColor='none'
     confirm_password.style.border='1px solid #022833';
password.style.border='1px solid #022833';
  } , 1500);
 
   };


  
   function password_check(){
    let check_err = setInterval(() => {

    if(passwordReg.test(password.value)==false){    
        showerr.classList.add('active');
        showerr.innerHTML=`Not strong Enough eg: Eight23&@)`;
            showerr.style.backgroundColor='red';
            showerr.style.color='white';
            showerr.style.margin='5px 0';
        
            password.style.border='3px solid red'
        return false  
       
    }

    else {  showerr.classList.add('active');
    showerr.innerHTML= `Strong password`
    showerr.style.backgroundColor="green"
    showerr.style.color="white"
    password.style.border='1px solid #022833';
password.style.border='1px solid #022833';
return true;};     

  }, 0); 

  setTimeout(function(){;
    clearInterval(check_err);
    showerr.classList.remove('active')
    showerr.innerHTML=" ";
    showerr.style.background="none"
    password.style.border='1px solid #022833'

  }, 2000)


};


   function signup(e){
   
       e.preventDefault();
   
        if( passwordReg.test(password.value) && (password.value === confirm_password.value)){

           
            let Adduser=new adduser(username.value, password.value);
        let ade=[];
        ade.push(Adduser);
         
           localStorage.clear();
            localStorage.setItem('username', JSON.stringify(ade))
         
            
error_message.classList.add('active')

            error_message.innerHTML= `We are glad to have you, ${username.value}` ;
   error_message.style.backgroundColor= "green"
   error_message.style.color='white'
   allform.style.filter='blur(1px)'

          setTimeout(()=>{ window.location.replace('query.html')}, 3000)
           
           }
    
           else{ 
                   
      let signerror= setInterval(() => {

error_message.classList.add('active')

            error_message.innerHTML=`Check the form for error`;
            error_message.style.color="red";
            signup_button.style.backgroundColor="red" 
           }, 0);

      setTimeout(() => {
          clearInterval(signerror)

error_message.classList.remove('active')

          error_message.innerHTML=` `;
          signup_button.style.backgroundColor="#006888";
          signup_button.style.color="white"  
      }, 2000);
   };
  
   };

class adduser {
    constructor(username, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    
}






   



//    signup_button.addEventListener('hover', ()=>{
    
//         console.log('ade')
//          clearInterval(error);
//          error_message.innerHTML=" ";
//          confirm_password.style.border='1px solid #022833';
//     password.style.border='1px solid #022833';
      
//    });