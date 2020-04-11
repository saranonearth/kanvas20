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
const SUB = document.querySelector('.flex-3');
const gd_button = document.querySelector('.gd');
const SUB_button = document.querySelector('.org-button');
const events_heading = document.querySelector('.contract-title');
wd_button.addEventListener('click', () => {
    main.style.display = 'none';
    WD.style.display = 'block';
})

gd_button.addEventListener('click', () => {
    main.style.display = 'none';
    GD.style.display = 'block';
    window.scrollTo(950, 950);
})

SUB_button.addEventListener('click', () => {
    console.log(events_heading)
    main.style.display = 'none';
    GD.style.display = 'none';
    WD.style.display = 'none';
    SUB.style.display = 'block';
    events_heading.style.display = 'none'
    if (window.screen.width * window.devicePixelRatio < 650) {
        window.scrollTo(600, 600);
    } else {
        window.scrollTo(950, 950);
    }
})

const back = () => {
    main.style.display = 'flex';
    WD.style.display = 'none';
    events_heading.display = 'block'
    GD.style.display = 'none';
    SUB.style.display = 'none';
}