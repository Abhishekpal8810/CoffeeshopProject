// let tl = gsap.timeline();
// tl.from(".nav-logo-left .img",{
//     scale:0,
//     duration:1,
//     rotate:360
    
    
// })

// tl.from(".nav-mid ul li",{
//     opacity:0,
   
//    duration:0.7,
//    stagger:0.3
    
// });

// tl.from(".nav-right a i",{
//   scale:0,
//   opacity:0,
//   duration:0.1,
//   stagger:1
// })
// tl.from(".hero-left h1",{
//     x:"-100vw",
//     duration:0.5,
   
// })
// tl.from(".hero-left p",{
//     x:"-100vw",
//     duration:0.6,
   
// })
// tl.from(".hero-left button",{
//     x:"-100vw",
//     duration:0.7,
   
// })
// tl.from(".hero-right",{
//     y:"-100vh",
//     duration:0.7,
   
// })



// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
// });






// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
