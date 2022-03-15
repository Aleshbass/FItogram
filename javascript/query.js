const progress_img= document.querySelectorAll('.tick-container img')
const skip_button= document.querySelector('#skip button');
let form_inside= document.querySelectorAll('.form-inside');
const next_but= document.querySelectorAll('.next');
const prev_but= document.querySelectorAll('.previous');
const form_container= document.querySelector('.form-container');
const final_alert= document.querySelector('.alert_container')


let counter = 0;


skip_button.addEventListener('click', (e)=>{


  let click=  setInterval(function(){
        final_alert.id=" "
        final_alert.innerHTML="Welcome once again. We are glad to have you!"
        form_container.classList.add('active')

    }, 0)

    setTimeout(function(){
        clearInterval(click)
       window.location.replace("profile.html")
       form_container.classList.remove('active')
    }, 2000)
      
    
})


next_but.forEach(next=>{

    next.addEventListener('click', ()=>{
        counter++;
        updatePage();
        progress_img[counter-1].src="/img/success-svgrepo-com.svg"

        })
});

prev_but.forEach(prev=>{

    prev.addEventListener('click', ()=>{
        counter--;
        updatePage();
        progress_img[counter].src= "/img/first success.svg"
    
        })
});


function updatePage(){

for(let inside of form_inside ){

    if(inside.classList.contains('active')){
        inside.classList.remove('active')
    }
    form_inside[counter].classList.add('active')
}


}



next_but[next_but.length-1].addEventListener('click', ()=>{
    progress_img[2].src= "/img/success-svgrepo-com.svg"

   let nextpage= setInterval(() => {
    final_alert.id=" "
    final_alert.innerHTML="Welcome once again. We are glad to have you!"
    form_container.classList.add('active')
    }, 0);

    setTimeout(() => {
        clearInterval(nextpage)
        window.location.replace("profile.html")
    }, 1000);


})



// fitness questions (page 1-3)
let counter_2= 0;

const page_two= document.querySelectorAll('.inner');

const page_link= document.querySelectorAll('.pages span');

page_link.forEach((link, index)=>{
 
    link.addEventListener('click', ()=>{


        switch(link.id){
        case('1'):
        counter_2= 0;

        for(let span of page_link){

            if (span.classList.contains('active')){
                span.classList.remove('active')
            }  

        }
        page_link[counter_2].classList.add('active');

        for(let page of page_two){

            if (page.classList.contains('active')){
                page.classList.remove('active')

            }
            page_two[counter_2].classList.add('active')
        }
       
        break
        case('2'):
        counter_2= 1;
        
        for(let page of page_two){

            if (page.classList.contains('active')){
                page.classList.remove('active')
            }

        }
            for(let span of page_link){

                if (span.classList.contains('active')){
                    span.classList.remove('active')
                }   

            page_two[counter_2].classList.add('active')
            page_link[counter_2].classList.add('active')
        }
       

        break

        case('3'):
        counter_2= 2;

        for(let span of page_link){

            if (span.classList.contains('active')){
                span.classList.remove('active')
            }  
        }
        page_link[counter_2].classList.toggle('active')
       
        for(let page of page_two){

            if (page.classList.contains('active')){
                page.classList.remove('active')
            }

            page_two[counter_2].classList.add('active')
        }
        break

      default:
    link.classList.add('active')
}

        })

})

// fitness choice

const fitness_goals= document.querySelectorAll('.goals-container button')


fitness_goals.forEach(goal=>{
    goal.addEventListener('click', ()=>{
        goal.classList.add('active')
    
    })
})



const fitness_cancel= document.querySelectorAll('.goals-container i')
fitness_cancel.forEach(cancel=>{
    cancel.addEventListener('click', (e)=>{
    e.stopPropagation();
   
        cancel.parentElement.classList.remove('active')
  
})

});

//analysis 

//first we get details

let full_name= document.querySelector('#name');
let email= document.querySelector('#email');
let gender= document.querySelector('#gender');
let age= document.querySelector('#age');
let Current_weight= document.querySelector('#current-weight');
let target_weight= document.querySelector('#target-weight');



let user_height= document.querySelector('#height')

let quiz_choice= document.querySelectorAll(".choices button");
// console.log(quiz_choice[0].textContent.trim())
const submit_button= document.querySelector('#submit');
const summary_page= document.querySelector('.summary')


let chosen_quiz;

quiz_choice.forEach(quiz=>{
    quiz.addEventListener('click', ()=>{
        console.log(quiz.textContent.trim())
        chosen_quiz= quiz.textContent.trim()
        return chosen_quiz
    })
    
})

submit_button.addEventListener('click', ()=>{
                Current_weight= Current_weight.value;
                user_height= user_height.value/100;
    let BMI= (Current_weight/ Math.pow(user_height, 2)).toFixed(2)   

   full_name= full_name.value;
   email=email.value;
   gender=gender.value;
   target_weight= target_weight.value

           let current_year= new Date();
         current_year= current_year.getUTCFullYear();

            age= age.value;
            let yearof_birth= new Date (age)
            yearof_birth= yearof_birth.getUTCFullYear();

 let current_age= parseInt(current_year - yearof_birth);



let chosen_goals= [];


fitness_goals.forEach(goal=>{
    if (goal.classList.contains('active'))
        chosen_goals.unshift(goal.textContent)
   
})


let alldetails= new collectinfo(full_name, email, current_age, BMI,  gender, chosen_goals, chosen_quiz, target_weight)

console.log(alldetails)

summary_page.innerHTML=` <h3> Hello ${alldetails.name}, </h3>
You are a ${alldetails.age}years old ${alldetails.gender} with interest in fitness. You want to achieve "${alldetails.fitgoals}".
With a current weight of ${Current_weight}kg and a BMI of ${alldetails.BMI}, we think you can achieve ${alldetails.targetweight}kg in no time with your motivation.
<br>    
Here on FITOGRAM, you'll have a chance to reach out to people with similar fitness interest. You can stream a live workout session if you like

 We'll send a copy of your summary including suggested FITOGRAM accounts to follow to <strong>${alldetails.email}</strong>`



});


class collectinfo {
    constructor(...c) {
        this.name = c[0];
        this.email = c[1];
        this.age = c[2];
        this.BMI=c[3];
        this.gender= c[4]
        this.fitgoals = c[5].join(', ');
        this.quizchoice = c[6];
        this.targetweight=c[7]
    }
};



const last_previous_button= document.getElementById('last-previous');
last_previous_button.addEventListener('click', ()=>{

    window.location.reload();
})



























