const page = document.querySelector('.containersnap__gameofthrones');
const section = document.querySelector('html');
const btn = document.querySelector('.btn-down');

btn.addEventListener('click', scrollPage);

function scrollPage() {

    if (window.scrollY === 0) {
        console.log('down');
        page.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
            btn.innerHTML = `<p><i class="fas fa-arrow-circle-up fa-4x"></i></p>`;
        }, 500);
    }
    else {
        console.log('up')
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            btn.innerHTML = `<p><i class="fas fa-arrow-circle-down fa-4x"></i></p>`;
        }, 500);
    }
};
