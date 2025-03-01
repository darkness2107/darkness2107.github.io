const a = document.querySelectorAll('.box .item');
const patron = document.querySelectorAll('.box .patron img');
// const verj = document.querySelector('.box .verj');


const audio = new Audio();


// let cur = 8;


document.onmousemove = e => {
    cel.style.top = e.y - 50 + 'px';
    cel.style.left = e.x - 50 + 'px';
};  

a.forEach((item, index) => {
    item.onclick = () => {
        // cur--;
        // if(cur == 0) {
        //     verj.style = 'visibility: visible; opacity: 1; translate: -300px';
        // }
        audio.src = "./zvuk.mp3";
        item.style.scale = 0;
    }
});





// const ayo = document.querySelector('.box .verj .kojak');

// voch.onclick = () => {
//     body.style.visibility = 'hidden';
// }
// ayo.onclick = () => window.location.reload()



 