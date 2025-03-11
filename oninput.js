
const box = document.querySelector('.big .box');
const big = document.querySelector('.big');
const rad = document.querySelectorAll('.big .pult span input');


let a = 0
let b = 0

let arr = [
    'linear-gradient(25deg, transparent 45%, white 45% 55%, transparent 55% 100%), linear-gradient(-25deg, transparent 45%, white 45% 55%, transparent 55% 100%), blue;',
    'radial-gradient(circle, red 20%, white 20% 100%)',
    'conic-gradient(from -120deg at 35% 55%,  blue 18%, transparent 18%), linear-gradient(white 0% 55%, red 20% 50%)',
    'linear-gradient(to right, transparent 0 40%, #fff 40% 60%, transparent 60%) no-repeat 50% 50% / 70% 80%, linear-gradient(transparent 0 40%, #fff 40% 60%, transparent 60%) no-repeat 50% 50% / 47% 120% #D01F1B;',
    'linear-gradient(red 20%, transparent 20% 45%, white 45% 55%, transparent 55% 80%, red 80% 100%), linear-gradient(to right, red 20%, transparent 20% 48%, white 48% 52%, transparent 52% 100%), linear-gradient(to left, red 20%, transparent 20% 100%) red;'
]


wid.oninput =  () => {
box.style.width = wid.value + 'px';

}

heig.oninput = () => {
    box.style.height = heig.value + 'px';
}

trasX.oninput = () => {
    a = trasX.value
    box.style.transform = `translateX(${a}px) translateY(${b}px)`
}

trasY.oninput = () => {
    b = trasY.value
    box.style.transform = `translateX(${a}px) translateY(${b}px)`
}

bgcolor.oninput = () => {
    box.style.backgroundColor = bgcolor.value
}

bgimg.oninput = () => {
    box.style.background = `url(${bgimg.value})`
}

BorRad.oninput = () => {
    box.style.borderRadius = BorRad.value + 'px'
}

rot.oninput = () => {
    box.style.rotate = rot.value + 'deg'
}

dis.onclick = () => {
    if(dis.checked == true){
        box.style.display = 'block';
    }else{
        box.style.display = 'none';
    }
}

rad.forEach((item, index) => {
    item.onclick = () => {
    box.style.background = arr[index];
    }
});
console.log(rad);
