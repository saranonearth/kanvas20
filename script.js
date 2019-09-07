let circle = [];
if (window.innerHeight < window.innerWidth) {
  circle[0] = {
    x: 'calc(50vw - 4.8em)',
    y: 0
  };
  circle[1] = {
    x: 'calc(50vw - 4.8em)',
    y: '110%'
  };
  circle[2] = {
    x: 'calc(50vw - 4.8em)',
    y: '220%'
  };
} else {
  circle[0] = {
    x: '-110%',
    y: '20vh'
  };
  circle[1] = {
    x: 0,
    y: '20vh'
  };
  circle[2] = {
    x: '110%',
    y: '20vh'
  };
}

let t1 = anime.timeline({
  easing: 'easeInOutSine',
  duration: 1250
});

t1.add({
    targets: '#circle1',
    keyframes: [{
        translateX: 0,
        translateY: 0,
        scale: [0, 9],
        duration: 500
      },
      {
        scale: 1,
        duration: 500,
        delay: 700
      },
      {
        translateX: circle[0].x,
        translateY: circle[0].y,
        duration: 250
      }
    ]
  })
  .add({
    targets: '#camera',
    opacity: 1,
    translateX: [40, 0],
    duration: 250
  }) //circle2
  .add({
    targets: '#circle2',
    keyframes: [{
        translateX: 0,
        translateY: 0,
        scale: [0, 9],
        duration: 500
      },
      {
        scale: 1,
        duration: 500,
        delay: 700
      },
      {
        translateX: circle[1].x,
        translateY: circle[1].y,
        duration: 250
      }
    ]
  })
  .add({
    targets: '#code',
    opacity: 1,
    translateX: [40, 0],
    duration: 250
  }) //circle3
  .add({
    targets: '#circle3',
    keyframes: [{
        translateX: 0,
        translateY: 0,
        scale: [0, 9],
        duration: 500
      },
      {
        scale: 1,
        duration: 500,
        delay: 700
      },
      {
        translateX: circle[2].x,
        translateY: circle[2].y,
        duration: 250
      }
    ]
  })
  .add({
    targets: '#design',
    opacity: 1,
    translateX: [40, 0],
    duration: 250
  });

//title
anime({
  targets: '#title .y',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1900,
  delay: (el, i) => i * 250,
  loop: 3,
  direction: 'alternate'
});

//icons social media
anime({
  easing: 'easeInOutExpo',
  targets: '.social-icon',
  duration: 900,
  opacity: [0, 100],
  translateX: [-100, 0],
  delay: anime.stagger(100)
});

//corner-logo square to circle
anime({
  targets: '.corner-logo',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  loop: true,
  translateY: 10,
  duration: 3000,
  delay: 500,
  direction: 'alternate',
  rotate: [0, 360],
  elasticity: 600
});

//initially
document.querySelector('.close').style.display = 'none';
document.querySelector('.photography').style.display = 'none';

const textWrapper = document.querySelector('.photography');
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

const targets = [{
    id: '#circle1',
    icon: '#camera',
    heading: '.photography',
    svgclass: ' .p'
  },
  {
    id: '#circle2',
    icon: '#code',
    heading: '.photography',
    svgclass: ' .q'
  },
  {
    id: '#circle3',
    icon: '#design',
    heading: '.photography',
    svgclass: ' .a'
  }
];

let target;

const open = index => {
  target = targets[index];
  anime({
    targets: target.id,
    translateX: {
      value: circle[index].x,
      duration: 0
    },
    translateY: {
      value: circle[index].y,
      duration: 0
    },
    scale: 55,
    duration: 250,
    easing: 'easeInCirc'
  });
  document.getElementById('title').style.display = 'none';
  document.querySelector('.close').style.display = 'block';
  document.querySelector(target.heading).style.display = 'block';
  document.querySelector(target.id).style.zIndex = '2';
  anime({
    targets: target.icon + target.svgclass,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 2200,
    delay: anime.stagger(250),
    easing: 'easeInCirc',
    loop: true,
    direction: 'alternate'
  });
  anime({
    targets: target.heading + ' .letter',
    translateX: [40, 0],
    opacity: [0, 1],
    duration: 1200,
    delay: anime.stagger(30, {
      start: 500
    })
  });

  if (window.innerWidth < 800) {
    anime({
      targets: target.icon,
      translateX: [0, 1.5],
      translateY: [0, 2],
      scale: 0.2,
      duration: 200
    });
  }
};

const close = () => {
  anime({
    targets: target.id,
    translateX: {
      value: circle[target.id.charAt(7) - 1].x,
      duration: 0
    },
    translateY: {
      value: circle[target.id.charAt(7) - 1].y,
      duration: 0
    },
    scale: [50, 1],
    duration: 250,
    easing: 'easeOutCirc'
  });
  document.querySelector(target.id).style.zIndex = '0';
  document.getElementById('title').style.display = 'block';
  document.querySelector('.close').style.display = 'none';
  document.querySelector(target.heading).style.display = 'none';
  if (window.innerWidth < 800) {
    anime({
      targets: target.icon,
      translateX: [40, 0],
      scale: 1,
      duration: 200
    });
  }
};

const icons = ['#circle1', '#circle2', '#circle3'];
icons.forEach(
  (icon, index) => (document.querySelector(icon).onclick = () => open(index))
);

document.querySelector('.close').onclick = close;