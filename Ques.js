
// loader animation and loader text animation
function laoderanimation(){
    
//  loader text gsap anim 

var tl = gsap.timeline();

tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 0.6,
    delay: 0.5
})

tl.from(".line h2", {
    opacity: 0,
    onStart: function () {

        //  loader text counter js


        var h5 = document.querySelector("#line1-part1 h5");

        var counter = 0;
        setInterval(function () {
            counter++;
            if (counter < 100) {
                h5.innerHTML = counter;
            } else {
                h5.innerHTML = 100;
            }
        }, 34)


    }


})

tl.from("#line1-part1", {
    opacity: 0
})


// loader remove anim
tl.to("#loader", {
    opacity: 0,
    // duration: 0.5,
    duration:0.2
    // delay: 2
});

tl.from("#page1",{
    y:1200,
    opacity:0,
    duration:0.7
});

tl.to("#loader",{
    display:"none"
});

// hero text anim
tl.from("#hero h1,h2",{
    y: 100,
    stagger: 0.3
});

 
 

tl.from("#nav",{
    opacity:0
})

}

laoderanimation();

// making cursor animation
function cursoranimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
         left:dets.x,
         top:dets.y
        })
   })
} 
cursoranimation();


// making magnet effect
Shery.makeMagnet("#nav-part2 h4" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



  





























