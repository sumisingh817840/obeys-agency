





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
    duration: 0.5,
    delay: 2
})

tl.from("#page1",{
    y:1200,
    opacity:0,
    duration:0.7
})

tl.to("#loader",{
    display:"none"
})



























