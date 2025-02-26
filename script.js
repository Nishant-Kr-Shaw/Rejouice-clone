function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

loco();

function cursorEffect() {
    var page1Content = document.querySelector("#page1-content");
    var cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove", function (dets) {

        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {

        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    page1Content.addEventListener("mouseleave", function () {

        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })

}

cursorEffect();

function svgeffect(){
    gsap.from("svg", {
        y: 80,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "svg",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
    
}

svgeffect();
function page2Animation() {
    gsap.from("#cont1 h3", {
        y: 50,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
    gsap.from("#cont2 h2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}

page2Animation();

function page4Animation() {
    gsap.from("#elem1 h3", {
        y: 50,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
    gsap.from("#elem2 h2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}

page4Animation();

function slider(){
    var swiper = new Swiper(".mySwiper",{
        slidesPerView: 1,
        spacebetween: 30,
        loop: true,
        autoplay:{
            delay: 1000,
            disableOnInteraction: true,
        },
    });
}

slider();

var tl = gsap.timeline();
tl.from("#loader h3",{
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})
tl.to("#loader h3",{
    opacity: 0,
    x: -20,
    duration:1,
    stagger: -0.1
})
tl.to("#loader",{
    opacity: 0
})
tl.to("#loader",{
    display: "none"
})