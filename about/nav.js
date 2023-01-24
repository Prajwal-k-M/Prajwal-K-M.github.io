let prim_nav = document.querySelector('.primary-navigation');
let menu = document.getElementById('menu');
let body=document.querySelector('body')
// console.log(prim_nav );
// console.log(body);
let isvisible = false
menu.addEventListener('click', () => {
    if (isvisible == true) {
        prim_nav.style.transform = 'translateX(100%)';
        isvisible = false;
        console.log(isvisible,"if");

    } else {
        prim_nav.style.transform = 'translateX(0%)';
        isvisible = true;
        console.log(isvisible,"else");
    }
});

document.addEventListener('click', (event) => {
    if (isvisible == true && event.target!==menu && event.target !==prim_nav) {
        prim_nav.style.transform = 'translateX(100%)';
        isvisible = false;
        console.log(isvisible,"body");
    }
});
