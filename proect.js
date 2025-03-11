const video = document.querySelector('.box .anim video');
const anim = document.querySelector('.box .anim');
const img = document.querySelector('.box .anim img');
const h = document.querySelector('.box .anim h2');
const svg = document.querySelector('.box .anim svg');
const nkar = document.querySelector('.box .uj .drakon img');
const scal = document.querySelector('.box .uj .scal');
const scalmek = document.querySelector('.box .uj .scal1');

// const overview = document.querySelector('.box .main');
// const uj = document.querySelector('.box .uj');
// const texter = document.querySelector('.box .texter');

// const key = document.querySelector('.box .erku');
// const massive = document.querySelector('.box .massive');
// const divan = document.querySelector('.box .divan');
// const atom = document.querySelector('.box .atom');
// const texanq = document.querySelector('.box .texanq');
// const rob = document.querySelector('.box .rob');
// const dasht = document.querySelector('.box .dasht');
// const grafik = document.querySelector('.box .grafik');

// const errord = document.querySelector('.box .errord');

// const chorrord = document.querySelector('.box .chorrord');

// const hingerord = document.querySelector('.box .hingerord');

// const navmek = document.querySelector('.box .nav .items1');
// const naverku = document.querySelector('.box .nav .items2');
// const navereq = document.querySelector('.box .nav .items3');
// const navchors = document.querySelector('.box .nav .items4');
// const navhing = document.querySelector('.box .nav .items5');


// main.onmouseenter = () => {
//     navmek.style.color = 'red';
// }


let  set = 100;

// anim.onwheel = e => {
//     if(e.deltaY > 0 )
//     video.play();
// }
// if(e.deltaY = 0) {
//     video.pause();
// }

anim.onclick = () => {
    video.play();
    img.style = 'opacity: 0; visibility: hidden;';
    h.style = 'opacity: 0; visibility: hidden;';
    svg.style = 'opacity: 0; visibility: hidden;';
    anim.style = 'cursor:default;'
}

// anim.onwheel = e => {
//     if(e.deltaY = 0 && e.deltaY <=-10){
//         svg.style.opacity = 0.5;
//         svg.style.translate = 0, 50 + 'px'
//     }
//     set++;
// }

scal.onmouseenter = () => {
    nkar.style.scale = .5;
}

scalmek.onmouseenter = () => {
        nkar.style.scale = .8;
}




