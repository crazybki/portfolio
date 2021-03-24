const page = document.querySelector('.containersnap__gameofthrones');
const section = document.querySelector('html');
const section2 = document.querySelector('.test');
const btn = document.querySelector('.btn-down');


btn.addEventListener('click', scrollPage);

function scrollPage() {
    if (window.scrollY === 0) {
        page.scrollIntoView({ behavior: 'smooth' })
        btn.innerHTML = 'Scroll up';

    } else if (window.scrollY > 1085.5999755859375) {
        console.log('test')
        section.scrollIntoView({ behavior: 'smooth' });
        btn.innerHTML = 'Scroll up';
    }
    else {
        console.log(window.scrollY)
        section2.scrollIntoView({ behavior: 'smooth' });
        btn.innerHTML = 'Scroll down';
    }

};

