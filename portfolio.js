const page = document.querySelector('.containersnap__gameofthrones');
const section = document.querySelector('html');
const btn = document.querySelector('.btn-down');
let position = 0;

btn.addEventListener('click', scrollPage);

function scrollPage() {

    if (window.scrollY === position) {
        page.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
            btn.innerHTML = `<p><i class="fas fa-arrow-circle-up fa-4x"></i></p>`;
        }, 500);
    }
    else {
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            btn.innerHTML = `<p><i class="fas fa-arrow-circle-down fa-4x"></i></p>`;
        }, 500);
    }
};


window.addEventListener('scroll', scrollToPage);

function scrollToPage() {
    if (window.scrollY < 400) {
        btn.innerHTML = `<p><i class="fas fa-arrow-circle-down fa-4x"></i></p>`;
    } else {
        btn.innerHTML = `<p><i class="fas fa-arrow-circle-up fa-4x"></i></p>`;
    }
};
