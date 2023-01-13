document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('active');
      document.querySelector('mode').classList.add('active')
    } else {
      document.querySelector('header').classList.remove('active');
    }
  }
   );

  document.addEventListener('load', () => {
    if (window.scrollY > 0) {
      document.querySelector('header').classList.add('active');
    } else {
      document.querySelector('header').classList.remove('active');
    }
  }
   )
let mode = document.querySelector('.mode')
mode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')){
      mode.firstElementChild.style.display="none"
      mode.lastElementChild.style.display="block"
    }else{
      mode.lastElementChild.style.display="none"
      mode.firstElementChild.style.display="block"

    }
})