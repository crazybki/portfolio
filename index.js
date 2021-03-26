/**


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
.containerWork {
    transition: opacity 1s ease-in-out;
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
}

.changebackground {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    width: 40%;
}

.changebackground2 {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    width: 40%;
}

 fadeInOpacity {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }


    100% {
        opacity: 0;
    }
}

        <div class="containerWork">
        </div>
 *
 */

