


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




// Get the container element
// var transparent = document.querySelector(".transp");

// // Get the current scroll position of the body
// var bodyScrollTop = 0;

// // Add an event listener for the scroll event on the body
// document.body.addEventListener("scroll", function() {
//     // Get the new scroll position of the body
//     bodyScrollTop = document.body.scrollTop;
//     // Apply the scrollTop value to the container element
//     container.style.top = -bodyScrollTop + "10px";
// });





























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