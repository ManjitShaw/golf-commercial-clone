var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
    duration: 0.2,
    ease: "power2.out"
  });

  gsap.to("#cursor-blur", {
    left: dets.x - 200,
    top: dets.y - 200,
    duration: 0.5,
    ease: "power2.out"
  });
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    crsr.style.scale = 3;
  });
  element.addEventListener("mouseleave", function () {
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.border = "0px solid ";
    crsr.style.scale = 1;
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    marker: true,
    start: "top -10%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -80%",
    scrub: 2,
  },
});

gsap.from("#aboutus ", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#aboutus",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 2,
  },
});

//   gsap.from(".cards ", {
//     scale: "0.8",
//     stagger: 0.1,
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger:{
//         trigger:"#cards-container",
//         scroller: "body",
//         // markers: true,
//         start: "top 60%",
//         end: "top 55%",
//         scrub: 2
//     }
//   })
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 4,
  },
});
