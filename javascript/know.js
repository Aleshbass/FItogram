



// get user details from localstorage


let userdetails = JSON.parse(localStorage.getItem('username'));
userdetails= userdetails[0].username
console.log(userdetails)

document.addEventListener('DOMContentLoaded', ()=>{

    let username= document.querySelector('#username')
    username.innerHTML= `@${userdetails}`
})

// menu bar
const menu = document.querySelector('.menu img');

const imagecontainer= document.querySelector('.image-container')
const asidecontainer= document.querySelector('.aside-container')
menu.addEventListener('click', ()=>{

    imagecontainer.classList.toggle('menuclicked')
    asidecontainer.classList.toggle('menuclicked')
    
  
    if( imagecontainer.classList.contains('menuclicked')){
        menu.src= 'Myicons/cross-svgrepo-com.svg'

    }

  else{
      menu.src= 'Myicons/menu-svgrepo-com.svg'
    }

})


// dark mode




let change= document.querySelector('#box');
const postcontainer= document.querySelector('.post-container .live');

const header= document.querySelector('header');

const allheader3= document.querySelectorAll('h3');

const allheader4= document.querySelectorAll('h4');
const para= document.querySelectorAll('p');
const AllLink= document.querySelectorAll('a');

const icons= document.querySelectorAll('.second-content img');
const icons_two= document.querySelectorAll('.post-aside-two  img');
const mymenu = document.querySelector('#mymenu');
const like_para= document.querySelectorAll('#likes')
const comment_name= document.querySelectorAll('.comment span')




function toggle(){
   

    if(change.checked){
for(x of comment_name){

    x.classList.toggle('active');
    x.style.transition="all, 330ms"}


        menu.classList.toggle('active')
  
        for(h3 of allheader3){
            h3.classList.toggle('active')
            h3.style.transition="all, 330ms"}
            
        for(h4 of allheader4){
            h4.classList.toggle('active')
            h4.style.transition="all, 330ms"}

            for(p of para){
                p.classList.toggle('active')
                p.style.transition="all, 330ms"}
            
                for(p of like_para){
                    p.classList.toggle('active')
                    p.style.transition="all, 330ms"}
                

            for(a of AllLink){
                a.classList.toggle('active')
                a.style.transition="all, 330ms"}
    

            for(let icon of icons){
                icon.classList.toggle('active');
                icon.style.transition="all, 330ms"
            }

            for(let icon of icons_two){
                icon.classList.toggle('active');
                icon.style.transition="all, 330ms"
            }
    
            header.classList.toggle('active')
            header.style.transition="all, 330ms"
            
            imagecontainer.classList.toggle('active')
            imagecontainer.style.transition="all, 330ms"

             asidecontainer.classList.toggle('active')
            asidecontainer.style.transition="all, 330ms"

            
            postcontainer.classList.toggle('active')
            postcontainer.style.transition="all, 330ms"

           

    }

};


console.log(like_para)
//like

let likeme= false

const like_post = document.querySelectorAll('#love img');

like_post.forEach(like=>{

    like.addEventListener('click', ()=>{
        like.classList.toggle('like')

        let textC= like.parentElement.parentElement.previousElementSibling.lastElementChild.textContent;
        let Element= like.parentElement.parentElement.previousElementSibling.lastElementChild;
    
        // let newT= textC.match(/(.*\s)/);
    
    let newT= textC.substr(0, textC.length -5)
    
    
    if(like.classList.contains('like')){
    
    let final=  parseInt (newT) + 1
    Element.textContent= `${final} likes`
    
    }
    
    else{
    let final=  parseInt (newT)-1 ;
    Element.innerHTML= `${final} likes`
    }
    
    });
})


function like_img(){
    const like_post = document.querySelectorAll('#love img');
    for(let like of like_post){
     like.addEventListener('click', ()=>{

        like.classList.toggle('like')

        let textC= like.parentElement.parentElement.previousElementSibling.lastElementChild.textContent;
        let Element= like.parentElement.parentElement.previousElementSibling.lastElementChild;
    
        // let newT= textC.match(/(.*\s)/);
    
    let newT= textC.substr(0, textC.length -5)
    
    
    if(like.classList.contains('like')){
    
    let final=  parseInt (newT) + 1

    Element.textContent= `${final} likes`
    
    }
    
    else{
    let final=  parseInt (newT)-1 ;
 
    Element.innerHTML= `${final} likes`
    }
    
        
     })   
    
};
}
 
    
   

// filter: invert(21%) sepia(96%) saturate(6557%) hue-rotate(357deg) brightness(104%) contrast(115%);
// filter: invert(1)
// filter: invert(100%) sepia(0%) saturate(24%) hue-rotate(12deg) brightness(107%) contrast(105%)


const posted_img= document.querySelector('#uploaded')
const upload_button= document.querySelector('.upload')
let upload_container= document.querySelector('.upload-container');

upload_button.addEventListener('click', (e)=>{
    // e.preventDefault();
    document.querySelector('main').classList.add('active')

})
const reader= new FileReader
let myfile= document.querySelector('#upload');
let src;
myfile.addEventListener('change', (event)=>{
  let filedet= event.target.files
  filedet= filedet[0];
src= URL.createObjectURL(filedet);

posted_img.src= src


upload_container.classList.remove('active')


})




// uploading pictures.

let caption= document.querySelector('#caption')
let post_contain= document.querySelector('.post')

const upload_img= document.querySelector('#post-picture');
upload_img.addEventListener('click', uploaded) 



function uploaded(){

    let mycaption= caption.value;
    upload_container.classList.add('active');
    document.querySelector('main').classList.remove('active')
    
    post_contain.insertAdjacentHTML('afterbegin', `
    <div class="post-box">
    <div class="post-img">
    <img src="${posted_img.src}" alt="" srcset="">
    </div> <div class="post-aside">
        <div class="post-aside-one">
            <div class="image full-image" id="full-image-three">
                <img src="/img/post5.jpg" alt="" srcset="">
            </div>
    
            <p>${userdetails}</p>
            <p id="like">0 likes</p>
        </div>
    
     <div class="post-icon">
        <div class="post-aside-two" id="love" >
            <img src="/Myicons/like-svgrepo-com.svg" onclick="like_img();" alt="" srcset="">
           
                </div>
                <div class="post-aside-two">
                <img src="/Myicons/comment-svgrepo-com.svg" alt="" srcset="">
            </div>
     </div>
    </div>
    <div class="comment">
    
    <p><span>${userdetails}</span>${mycaption}</p>
    </div>
    </div>
    
    ` )

}

const cancel_button= document.querySelector('#cancel');
cancel_button.addEventListener("click", ()=>{

    upload_container.classList.add('active');
    document.querySelector('main').classList.remove('active')
})














