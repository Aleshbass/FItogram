
// window.addEventListener('DOMContentLoaded', ()=>{

// localStorage.clear();

// })


let body= document.querySelector('body')
let header= document.querySelector('header');
let content_container= document.querySelector('.content');
let intro= document.querySelector('#intro');
let form= document.querySelector('#form');
let change= document.querySelector('#box');



function toggle(){

    if(change.checked){
    body.classList.toggle("change");
    body.style.transition="all, 330ms"
    content_container.classList.toggle("change")
    content_container.style.transition="all, 330ms"
    intro.classList.toggle("change");
    intro.style.transition="all, 330ms"
    header.classList.toggle("change");
    header.style.transition="all, 330ms"
    
    console.log(body.classList);
    }
};
    





let myimages=[{"img":" /img/img0.jpg",
   "name": "Abasido",
   "fg": "Lean Body Mass"
},
{"img":" /img/img1.jpg",
"name": "Frances",
"fg": "Core Stability"
},
{"img":" /img/img3.jpg",
"name": "Hakeem",
"fg": "Cardio Endurance"
},
{"img":" /img/img6.jpg",
"name": "Rihanna",
"fg": "Toned Body"
},
{"img":" /img/img4.jpg",
"name": "Lucia",
"fg": "General fitness"
},
{"img":" /img/img5.jpg",
"name": "Maleek",
"fg": "Bodybuilding"
},
{"img":" /img/img7.jpg",
"name": "sofia",
"fg": "Just vibes"
}
]

let counter= 0;


    let imgcontainer= document.querySelector('.image-container')

    let images= document.createElement('img');
    images.id="images"
   
    let para= document.createElement('div');
    para.classList="par"
    
   
    
    imgcontainer.appendChild(images);                    
    imgcontainer.appendChild(para);
    images.src= myimages[counter].img
    para.innerHTML= ` <p>Fito-Handle : ${myimages[counter].name}</p>
    <p>Fito-Goal : ${myimages[counter].fg}</p>`



function buildImages(){

    counter++

    if(counter > 7){
        counter = 0
    }

    images.src= myimages[counter].img
    para.innerHTML= ` <p>Fito-Handle :  ${myimages[counter].name}</p>
    <p>Fito-Goal : ${myimages[counter].fg}</p>`



}

setInterval(buildImages, 6000);

let create_button= document.getElementById('signup');

create_button.addEventListener('click', ()=>{
    window.location.href="signup.html"
});




