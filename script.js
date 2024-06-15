// // function arrow(){
// //     var ar = document.querySelector(".inside");
// //     ar.addEventListener("mouseenter", function(){
// //         var tl=gsap.timeline();
// //         tl.to(".inside #hidden",{
// //             // y: 0,
// //             display:"inline-block",    
// //             duration:"0.5s"
// //         })
// //     })
// // }
// // arrow();
// function locomotive(){
//     gsap.registerPlugin(ScrollTrigger);
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

//   // follwoing line is not required to work pinning on touch screen

//   /* pinType: document.querySelector(".smooth-scroll").style.transform
//     ? "transform"
//     : "fixed"*/
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();

// }
function p1animation(){
var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function(){
    var tl=gsap.timeline();
    tl.to("#nav-bottom" ,{
        height:"20vh",
        duration:"0.5s"
    })
    tl.to(".options h5 " ,{
        display:"block",
        duration:"0.1s"
    })
    tl.to(".options h5 span", {
        y: 0,
        //  duration:2,
        stagger: {
            amount: 0.5
        }
    })
})
nav.addEventListener("mouseleave", function(){
    var tl1=gsap.timeline();
    tl1.to(".options h5 span", {
        y: 25,
        // duration:0.3,
        stagger: {
            amount: 0.5
        }
    })
    tl1.to(".options h5 " ,{
        display:"none",
        duration:"0.1s"
    })
    tl1.to("#nav-bottom" ,{
        height:"0vh",
        duration:"0.5s"
    })
    
})
}
function loadingAnimation() {
 var tl=gsap.timeline();
 tl.from("#p1",{
     opacity:1,
     duration:0.1
 })   
 tl.from("#p1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"200px",
    duration:2,
    ease:"expo.out",
 })
tl.from("#p1 ,#p1 h1,#p1 div,#p1 p",{
    opacity:0,
    duration:0.5,
    stagger: 0.2,
})
}
function p2animation(){
var ins=document.querySelectorAll(".inside");
ins.forEach(function(a){
    a.addEventListener("mouseenter", function(){
        console.log(a.childNodes);
        gsap.to(a.childNodes[7],{
            display:"block",
            opacity:1,
            scale:1
        })
        
    })
    a.addEventListener( "mousemove", function(dets){    
        gsap.to(a.childNodes[7],{
            x:dets.x - a.getBoundingClientRect().x-35,
            y: dets.y - a.getBoundingClientRect().y-120 ,            
        })
    })
    a.addEventListener("mouseleave", function(){
        // console.log(a.childNodes  );
        gsap.to(a.childNodes[7],{
            display: "none",
            opacity:0,
            scale:0
        })
   
})
})

}
// function p3animation(){
// var cover = document.querySelector("#p3 #p3-cover");
// var vid=document.querySelector("#p3 video");
// cover.addEventListener("click", function(){
//     vid.play();
//         gsap.to(vid ,{
//             transform:"scaleX(1) scaleY(1)",
//             opacity:1,
//         })
// })    
// vid.addEventListener("click", function(){
//     vid.pause();
//         gsap.to(vid ,{
//             transform:"scaleX(0.7) scaleY(0)",
//             opacity:0,
//         })
// })    

// }
// function p4animationd3(){
//     var covers = document.querySelectorAll(".d3-right1");

//     covers.forEach(function(cover) {
//       var vid = cover.querySelector("video");
      
//       cover.addEventListener("mouseenter", function() {
//         vid.play();
//         gsap.to(vid, {
//           opacity: 1,
       
//         });
//       });
  
//       cover.addEventListener("mouseleave", function() {
//         vid.pause();
//         gsap.to(vid, {
//             currentTime: 0
//         });
//       });
//     });
  
// }
// function p4animationcase3(){
//     var covers = document.querySelectorAll(".new-vid");
//     covers.forEach(function(cover) {
//       var vid = cover.querySelector("video");

//       cover.addEventListener("mouseenter", function() {
//         vid.play();

//         gsap.to(cover, {
//           height:"80vh",
//           currentTime: 0
//         });
//       });
  
//       cover.addEventListener("mouseleave", function() {
//         vid.pause();
//            gsap.to(cover, {
//              height: "42vh",
//           currentTime: 0
//         });
//       });
//     });
// }
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true }
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    // Function for animations
    function p6scrollanimation(){
        gsap.from(".p6-bottom-case2 h4", {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".p6-bottom-case2",
                scroller: "#main",
                // markers: true,
                start: "top 80%",
                end: "top 10%", 
                scrub: true
            }
        });
        gsap.from(".p6-bottom-case3 h4", {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".p6-bottom-case3",
                scroller: "#main",
                // markers: true,
                start: "top 80%",
                end: "top 10%", 
                scrub: true
            }
        });
        gsap.from(".p6-bottom-case4 h4", {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".p6-bottom-case4",
                scroller: "#main",
                // markers: true,
                start: "top 80%",
                end: "top 10%", 
                scrub: true
            }
        });
    }

    // Call animation functions
    p6scrollanimation();
});

//  function p7scrollanimation(){
//     gsap.to(".p7-right", {
//         scrollTrigger: {
//           trigger: ".p7-left",
//           start: "top 10%", // When the top of .p7-left hits the top of the viewport
//           end: "bottom 50%", // When the bottom of .p7-left hits the top of the viewport
//           pin: true,
//           scrub: true,
//         //   markers: true, // Remove this line to hide markers
//         }
//       });
//  }
//  function p7_2023animation() {
//     document.addEventListener('DOMContentLoaded', function() {
//         gsap.registerPlugin(ScrollTrigger);
//         ScrollTrigger.create({
//           trigger: ".t-p-left",
//           start: "top 20%",
//           end: "bottom 28%",
//           pin: ".t-p-left button",
//         //   markers: true // Optional: Show markers for debugging
//         });
//       });
//     var panels = document.querySelectorAll("#panel1");

//     panels.forEach(function(panel) {
//         var img = panel.querySelector("#panel1>img");
        
//         panel.addEventListener("mouseenter", function() {
//             gsap.to(img, {
//                 opacity: 1,
//                 scale: 1,
//                 display: "block"
//             });
//         });

//         panel.addEventListener("mouseleave", function() {
//             gsap.to(img, {
//                 opacity: 0,
//                 scale: 0,
//                 display: "none"
//             });
//         });

//         panel.addEventListener("mousemove", function(event) {
//             var rect = panel.getBoundingClientRect();
//             var x = event.clientX - rect.left - (img.width / 2);
//             var y = event.clientY - rect.top - (img.height / 2);
//             var angle = (event.clientX - rect.left) / rect.width * 60 - 30; // -30 to 30 degrees

//             gsap.to(img, {
//                 x: x * 0.3, // Move less by applying a fraction
//                 y: y * 0.1, // Move less by applying a fraction
//                 rotate: angle*0.05, // Apply calculated rotation angle
//             });
//         });
//     });
// }
// locomotive();
// p4animationcase3();
// p4animationd3();
// p3animation();
loadingAnimation();
// p7scrollanimation();
// p7_2023animation();
p1animation();
p2animation();
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true }
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    // ScrollTrigger example
    ScrollTrigger.create({
        trigger: "#p6-full",
        scroller: "#main",
        start: "top 50%",
        end: "top -20%",
        pin: ".p6-l button",
        // markers: true // Optional: Show markers for debugging
    });

    ScrollTrigger.create({
        trigger: ".t-p-left",
        scroller: "#main",
        start: "top 20%",
        end: "bottom 28%",
        pin: ".t-p-left button",
        // markers: true // Optional: Show markers for debugging
    });

    gsap.to(".p7-right", {
        scrollTrigger: {
            trigger: ".p7-left",
            start: "top 10%",
            end: "bottom 50%",
            pin: true,
            scrub: true,
            scroller: "#main",
            // markers: true, // Optional: Show markers for debugging
        }
    });

    var panels = document.querySelectorAll("#panel1");

    panels.forEach(function(panel) {
        var img = panel.querySelector("#panel1>img");
        
        panel.addEventListener("mouseenter", function() {
            gsap.to(img, {
                opacity: 1,
                scale: 1,
                display: "block"
            });
        });

        panel.addEventListener("mouseleave", function() {
            gsap.to(img, {
                opacity: 0,
                scale: 0,
                display: "none"
            });
        });

        panel.addEventListener("mousemove", function(event) {
            var rect = panel.getBoundingClientRect();
            var x = event.clientX - rect.left - (img.width / 2);
            var y = event.clientY - rect.top - (img.height / 2);
            var angle = (event.clientX - rect.left) / rect.width * 60 - 30; // -30 to 30 degrees

            gsap.to(img, {
                x: x * 0.3, // Move less by applying a fraction
                y: y * 0.1, // Move less by applying a fraction
                rotate: angle * 0.05 // Apply calculated rotation angle
            });
        });
    });

    function p4animationcase3(){
        var covers = document.querySelectorAll(".new-vid");
        covers.forEach(function(cover) {
            var vid = cover.querySelector("video");

            cover.addEventListener("mouseenter", function() {
                vid.play();
                gsap.to(cover, {
                 
                    height: "80vh",
                   
                });
            });

            cover.addEventListener("mouseleave", function() {
                vid.pause();
                vid.currentTime=0;
                gsap.to(cover, {
                    height: "42vh",
                });
            });
        });
    }

    p4animationcase3();
});