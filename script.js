const Rellax = window.Rellax

var rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
    breakpoints: [576, 768, 1201]
});

//conditional rendering event data

const wd_button = document.querySelector('.wd')
const main = document.querySelector('.flex');
const WD = document.querySelector('.flex-1');
const GD = document.querySelector('.flex-2');
const gd_button = document.querySelector('.gd');
const back1_button = document.querySelector('#back1');
const back2_button = document.querySelector('#back2');

wd_button.addEventListener('click', () => {
    main.style.display = 'none';
    WD.style.display = 'block';
})

gd_button.addEventListener('click', () => {
    main.style.display = 'none';
    GD.style.display = 'block';
    window.scrollTo(950, 950);
})

back1_button.addEventListener('click', () => {
    back()
})
back2_button.addEventListener('click', () => {
    back()
})

const back = () => {
    main.style.display = 'flex';
    WD.style.display = 'none';
    GD.style.display = 'none';
}