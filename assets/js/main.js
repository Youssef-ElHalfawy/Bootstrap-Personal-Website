
/*
  Layout
 */

const swiper = new Swiper('#brands .swiper', {
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    }
  }
});

/*
  Feedback Swiper
 */
const swiper_2 = new Swiper('#clients-feedback .swiper', {
  direction: 'horizontal',
  spaceBetween: 15,
  slidesPerView: 1,
  loop: true,
  keyboardControl: true,
  autoplay: {
    delay: 4000
  },
  navigation: {
      nextEl: '#clients-feedback .button-next',
      prevEl: '#clients-feedback .button-prev'
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 2,
      }
  }
});
/*
  Main Content
 */

/*
  Home Page
 */

/*
  Out Latest Projects
 */

const projectsFiltersBtns = document.querySelectorAll("#latest-projects [data-filter]");
const projects = document.querySelectorAll("#latest-projects [data-cat]");

function projectFilterClickHandler(e) {
  const clickedBtn = e.target;
  const projectSelector = clickedBtn.getAttribute("data-filter");

  if (projectSelector === "all") return projects.forEach(function (project) {
    project.classList.remove("hide");
  });

  const relatedProjects = document.querySelectorAll(`#latest-projects [data-cat="${projectSelector}"]`);

  projects.forEach(function (project) {
    project.classList.add("hide");
  })

  relatedProjects.forEach(function (project) {
    project.classList.remove("hide");
  })
}

projectsFiltersBtns.forEach(function (projectFilterBtn) {
  projectFilterBtn.addEventListener('click', projectFilterClickHandler);
})
