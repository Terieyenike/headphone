function scrollAppear() {
  let introText = document.querySelector('.intro-text');
  let introPosition = introText.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;

  if (introPosition < screenPosition) {
    introText.classList.add('intro-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

const nav = document.querySelector('.navbar');
const sectionOne = document.querySelector('.container');

const sectionOneOptions = {
  rootMargin: '-100px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
