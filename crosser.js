let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')
let dropdown = document.getElementById('dropdown')
let HamToggler = 0

function toggleHamburger(e) {
  if (HamToggler == 0){dropdown.style.display = 'block';
    HamToggler = 1;
  }
  else {dropdown.style.display = 'none';
    HamToggler = 0;
  }
  bars.forEach(bar => bar.classList.toggle('x'))
}

window.onresize = function(){
  if (HamToggler == 1){dropdown.style.display = 'none';
    HamToggler = 0;
    bars.forEach(bar => bar.classList.toggle('x'))
  }
}

navToggle.addEventListener('click', toggleHamburger)