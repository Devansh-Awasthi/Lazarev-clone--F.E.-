// function arrow(){
//     var ar = document.querySelector(".inside");
//     ar.addEventListener("mouseenter", function(){
//         var tl=gsap.timeline();
//         tl.to(".inside #hidden",{
//             // y: 0,
//             display:"inline-block",    
//             duration:"0.5s"
//         })
//     })
// }
// arrow();
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

function p2animation(){
var ins=document.querySelectorAll(".inside");
ins.forEach(function(a){
    a.addEventListener("mouseenter", function(){
        // console.log(a.childNodes  );
        gsap.to(a.childNodes[7],{
            display:"block",
            opacity:1,
            scale:1
        })
        
    })
    a.addEventListener("mouseleave", function(){
        // console.log(a.childNodes  );
        gsap.to(a.childNodes[7],{
            display: "none",
            opacity:0,
            scale:0
        })
    a.addEventListener( "mousemove", function(dets){    
        gsap.to(a.childNodes[7],{
            x:dets.x - a.getBoundingClientRect().x-35,
            y: dets.y - a.getBoundingClientRect().y-120 ,            
        })
    })
})
})

}
function p3animation(){
var cover = document.querySelector("#p3 #p3-cover");
var vid=document.querySelector("#p3 video");
cover.addEventListener("click", function(){
    vid.play();
        gsap.to(vid ,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
        })
})    
vid.addEventListener("click", function(){
    vid.pause();
        gsap.to(vid ,{
            transform:"scaleX(0.7) scaleY(0)",
            opacity:0,
        })
})    

}
function p4animationd3(){
    var covers = document.querySelectorAll(".d3-right1");

    covers.forEach(function(cover) {
      var vid = cover.querySelector("video");
      
      cover.addEventListener("mouseenter", function() {
        vid.play();
        gsap.to(vid, {
          opacity: 1,
        });
      });
  
      cover.addEventListener("mouseleave", function() {
        vid.pause();
        gsap.to(vid, {
          opacity: 0,
        });
      });
    });
  
}
p4animationd3();
p3animation();
// p1animation();
// p2animation();
