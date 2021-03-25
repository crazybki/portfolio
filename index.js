const bodyColor = document.querySelector('.containerbtn__btn');
let imgElements = document.querySelector('.containerWork');
const spacexImg = '/img/spaceX.jpg';
const gameOfThroneImg = '/img/got.png.jpg';
console.log(imgElements)

bodyColor.addEventListener('mouseenter', backgroundColor);

function backgroundColor() {

    imgElements.innerHTML = `<img class="changebackground" src="${spacexImg}">`;


    setTimeout(() => {
        imgElements.innerHTML = `<img class="changebackground2" src="${gameOfThroneImg}">`
    }, 4000);

    setTimeout(() => {
        imgElements.innerHTML = '';
    }, 7800);

}