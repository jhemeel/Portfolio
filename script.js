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


const FloatLabel = (() => {

  
  // add active class
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };
  
  // remove active class
  const handleBlur = (e) => {
    const target = e.target;
    if(!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');
  };
  
  // register events
  const bindEvents = (element) => {
    const floatField = element.querySelector('input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);    
  };
  
  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.floatedForm');

    floatContainers.forEach((element) => {

      if (element.querySelector('input').value) {
        element.classList.add('active');
      }

      bindEvents(element);
    });
  };
  
  return {
    init: init
  };
})();

FloatLabel.init();


// hamburger

let hamburger = document.querySelector('.hamburger')
let navLink = document.querySelector('.nav-link')
let navList = document.querySelector('.nav-list')

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active')
  navList.classList.toggle('active')
})


navLink.addEventListener('click', ()=>{
  hamburger.classList.remove('active')
  navList.classList.remove('active')
})


// scrollToview
