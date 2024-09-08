//// ================================ Imports ======================================
//scss
// import 'bootstrap/dist/css/bootstrap-grid.css';
// import 'nouislider/dist/nouislider.css';
import '../scss/index.scss';

//js
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import $ from 'jquery';
import Swiper from 'swiper';
// import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
// import IMask from 'imask';
// import Choices from 'choices.js';
// import autoComplete from '@tarekraafat/autocomplete.js';
// import validate from 'validate.js';
// import ApexCharts from 'apexcharts';
// import { rippleEffect, Ripple } from 'data-ripple';
// import noUiSlider from 'nouislider';
// import Scrollbar from 'smooth-scrollbar';

//// ================================ Code ======================================

// gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.panel');
gsap.registerPlugin(ScrollTrigger);

// console.log(sections);

// const   


let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 0.1,
    //snap: directionalSnap(1 / (sections.length - 1)),
    end: "+=3000"
  }
});

// let scrollTween = gsap.to(sections, {
//   // xPercent: -100 * (sections.length - 1),
//   // // xPercent: 100,
//   // ease: 'none', // <-- IMPORTANT!
//   scrollTrigger: {
//     trigger: '.wrapper',
//     start: 'center center',
//     pin: true,
//     scrub: true,
//     end: '+=4000',
//   },
// });


// gsap.set(".box-1, .box-2", {y: 100});
// ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

// red section
// gsap.to(".box-1", {
//   y: -130,
//   duration: 2,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".box-1",
//     containerAnimation: scrollTween,
//     start: "left center",
//     toggleActions: "play none none reset",
//     id: "1",
//   }
// });