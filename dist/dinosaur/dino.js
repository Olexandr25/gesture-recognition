const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const btn_up = document.getElementById('btn_up');


// document.addEventListener('onclick', function(event) {
//     jump();
// })

// function jump(resultName) {
//     if (dino.classList != 'jump') {
//         dino.classList.add('jump');
//     } 
//     setTimeout( function() {
//         dino.classList.remove('jump')
//     }, 300)
// }

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
  } 
  setTimeout( function() {
      dino.classList.remove('jump')
  }, 300)
}

btn_up.onclick = jump;



let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));   

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert('You are lost')
    }
}, 10)