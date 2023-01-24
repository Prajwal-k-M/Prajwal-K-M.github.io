


// login pop up logic
{

    let close =document.getElementById("close");
    let pop_up=document.querySelector('.login-pop');
    
    // setTimeout(()=>{
    //     pop_up.setAttribute("aria-hidden",false)
    // },1000)
    
    close.addEventListener('click',()=>{
        pop_up.setAttribute("aria-hidden",true)
    })
    
    
    pop_up.addEventListener('click',(event)=>{
        
        let pop=document.querySelector('.pop-item');
if(event.target!==pop )
{
    console.log("hi");
    pop_up.setAttribute("aria-hidden",true);
    login.style.color="white";
}
});




//============================================================
// on clickig on login btn
let login=document.querySelector(".login")
login.addEventListener('click',()=>{
    login.style.color="red";
    console.log("red");
    pop_up.setAttribute("aria-hidden",false);
})

//============================================================
}




const observer = new IntersectionObserver ((entries) => {
     entries.forEach((entry) => {

    console.log(entry)
    
    if (entry.isIntersecting) { 
        entry.target.classList.add('show');
    } 
    else {
    entry.target.classList.remove('show');
    }
    });
    
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
     hiddenElements.forEach((el) => observer.observe (el));



























// login pop up logic
// let close =document.getElementById("close");
// let pop_up=document.querySelector('.login-pop');

// setTimeout(()=>{
//     pop_up.setAttribute("aria-hidden",false)
// },1000)

// close.addEventListener('click',()=>{
//     pop_up.setAttribute("aria-hidden",true)
// })


// pop_up.addEventListener('click',(event)=>{
 
//         pop_up.setAttribute("aria-hidden",true)
      
// })