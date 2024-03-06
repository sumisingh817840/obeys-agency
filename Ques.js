
// loader animation and loader text animation
function laoderanimation() {

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
        duration: 0.2,
        delay: 2
    });

    tl.from("#page1", {
        y: 1200,
        opacity: 0,
        duration: 0.7
    });

    tl.to("#loader", {
        display: "none"
    });

    // hero text anim
    tl.from(".hero h1,h2", {
        y: 100,
        stagger: 0.3
    });



    tl.from("#nav", {
        opacity: 0
    })

}

laoderanimation();

// making cursor animation
function cursoranimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
}
cursoranimation();


function SheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 2, //Select Style
        config: { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -3 }, "mousemove": { "value": 0 }, "modeA": { "value": 1 }, "modeN": { "value": 0 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 50, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 10212607 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 5, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6969667150661145 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 1.37, "range": [0, 10] }, "metaball": { "value": 0.43, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 9.16, "range": [0, 100] } },
        gooey: true,
    });
}

SheryAnimation();




// making magnet effect
Shery.makeMagnet("#nav-part2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});


































