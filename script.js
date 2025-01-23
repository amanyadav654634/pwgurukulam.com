

document.body.classList.add('loading');

window.addEventListener ( "load",function () {
  setTimeout(function() {
      document.getElementById('preloader1').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
      document.body.classList.remove('loading');
  }, 2000); // Adjust the timeout (3000 ms = 3 seconds)
});

// window.addEventListener('load', function() {
//   setTimeout(function() {
//   document.getElementById('preloader1').style.display = 'none';
//   document.getElementById('mainContent').style.display = 'block';
// },3000)
// });


gsap.to("#preloader #tv",{
scrollTrigger:{
  trigger: '#preloader',
  // markers: true,
  start:"top -7%",
  // toggleActions: 'play pause reverse play',
  scrub: 2,
  pin: true,
},
scale:1.1,
})




window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('mainContent');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Create a video element and load a video file
  let video = document.createElement('video');
  video.src = '/vedio56.mp4'; // Replace with your video URL
  video.loop = true;
  video.muted = true; // Show video controls
  video.play();

// video.addEventListener("click",function(){
//   video.muted = false;
// })



  video.oncanplaythrough = () => {
    
    function drawVideo() {
      // Draw video frame to canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas before drawing a new frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);  // Scale the video to fit the canvas

      requestAnimationFrame(drawVideo); // Keep updating the canvas with new video frames
  
    }

    drawVideo(); // Start the video rendering loop

    setTimeout(function () {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    }, 399999000); // Show video for 3 seconds before hiding the preloader and displaying content
  };
});
// video.addEventListener("click",function(){
//   video.muted = false;
// })
// let video = document.createElement('video');









function createLeaf(xPos, yPos) {
    // Create a new leaf element
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');



    

    
    
    
    // Create an SVG element for the leaf shape
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 20 70"); // Adjusted viewBox for tiny leaf
    svg.setAttribute("width", "10px"); // Reduced width for the tiny leaf
    svg.setAttribute("height", "20px"); // Reduced height for the tiny leaf
    
    // Create the tapering leaf path
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M10,2 C4,6 3,20 3,30 C3,35 10,38 17,32 C18,28 16,20 14,10 C12,2 10,2 10,2 Z");
    path.setAttribute("fill", "#FFD700"); // Leaf color
    
    // Append the path to the SVG
    svg.appendChild(path);
    
    // Append the SVG to the leaf div
    leaf.appendChild(svg);
    
    // Set the leaf's initial position (randomized for automatic creation, or based on click)
    leaf.style.left = `${xPos - 5}px`; // Center the leaf horizontally at the position
    leaf.style.top = `${yPos - -97}px`;  // Center the leaf vertically at the position
    
    // Append the leaf to the body
    document.body.appendChild(leaf);
    
    // Automatically remove the leaf after the animation ends
    leaf.addEventListener('animationend', function() {
      leaf.remove();
    });
  }
  
  // Handle the click event to create a leaf at the mouse position
  document.body.addEventListener('click', function(event) {
    const xPos = event.clientX; // Mouse position relative to the viewport
    const yPos = event.clientY; // Mouse position relative to the viewport
    
    createLeaf(xPos, yPos); // Call the createLeaf function on click
  });
  
  // Handle page load to create leaves automatically
  window.addEventListener('load', function() {
    // Function to create a leaf at random positions
    function createLeafAutomatically() {
      const xPos = Math.random() * window.innerWidth; // Random X position
      const yPos = -4; // Start the leaf above the screen for a falling effect
      
      createLeaf(xPos, yPos); // Call the createLeaf function automatically
    }
    
    // Create a new leaf every 1 second after the page loads
    setInterval(createLeafAutomatically, 400); // Adjust the interval for more or fewer leaves
  });
  
  
  
  
  
  



    let pw = document.querySelector("#pwh1");
    let pw2 = document.querySelector(".nav img");
    let tl = gsap.timeline()
    let cursor = document.querySelector(".cursor")
    let cursorblur = document.querySelector(".cursorblur");
   tl.from("#pwh1",{
        rotate:360,
       x:5,
       y:80,
        duration:1,
      
    })
   tl.from(".nav img",{
        rotate:360,
       x:5,
       y:90,
        duration:1,
        
      
    })

    document.addEventListener("mousemove", function(dets){
        cursor.style.left=dets.x+"px",
        cursor.style.top=dets.y+"px";
            cursorblur.style.left=dets.x - 29+"px",
            cursorblur.style.top=dets.y - 30+"px";     
    })

    let tl1 = gsap.timeline()

   tl1.from(".threeimg .img8",{
            x:1900,
            stagger:.1,
            scrollTrigger:{
            trigger:" .img8",
            scroller:"body",
            // markers:true,
            start:"top 100%", 
             end:"top -0%",
            scrub:1,
          
        }
    
   })

   gsap.to(".vid img" ,{
           opacity:0,
            x:-1980,
            // stagger:1,
            scrollTrigger:{
            trigger:".vid img ",
            scroller:"body",
            // markers:true,
            start:"top 52%", 
             end:"top 10%",
            scrub:3,
          
        }
    
   })

   gsap.to(".vid #vidin1" ,{
    opacity:0,
     x:1980,
     // stagger:1,
     scrollTrigger:{
     trigger:".vid img ",
     scroller:"body",
     // markers:true,
     start:"top 47%", 
      end:"top 10%",
     scrub:3,
   
 }

})
   gsap.from(".vid video" ,{
             opacity:0,
            scrollTrigger:{
            trigger:" .vid video",
            scroller:"body",
            // markers:true,
            start:"top 7%", 
             end:"top 0%",
            scrub:3,
          
        }
    
   });

   let texts  = document.querySelector(".page5")

 
    texts.addEventListener("mouseenter", function(){
       
       cursor.style.width="32px";
       cursor.style.height="32px";
       cursor.style.borderRadius="50%";
       cursor.style.backgroundImage="none";
       cursor.style.backgroundColor="white";
       cursor.style.opacity="0.8";
    })
    texts.addEventListener("mouseleave", function(){
      
       cursor.style.width="44px";
       cursor.style.height="45px";
       cursor.style.borderRadius="50%";
       cursor.style.backgroundImage="url(/pw-screen2.png)";
    })


   
  
   gsap.from(".page5 #pwh2heading" ,{
     y:-1900,
     rotate:70,
     delay:1,
ease: "circ.inOut",
     scrollTrigger:{
     trigger:".page5 #pwh2heading",
     scroller:"body",
     markers:true,
     start:"top -230%", 
      end:"top -280%",
     scrub:2,
 }
})
   gsap.from(".page5 #colon1" ,{
     x:19,
     rotate:370,
    //  stagger:3,
     duration:2.5,
     delay:2,
    
ease: "back.inOut(4)",
// ease: "circ.inOut",
// ease: "expoScale(0.5,7,none)",
// ease: "bounce({strength:0.5, endAtStart:true})",

     scrollTrigger:{
     trigger:".page5 #colon1 ",
     scroller:"body",
    //  markers:true,
     start:"top 30%", 
      end:"top 20%",
     scrub:3.5,
   
 }

})

   gsap.from(".page5 #colon2" ,{
    x:-19,
     rotate:370,
     stagger:3,
     duration:2.5,
se: "back.inOut(4)",
// ease: "circ.inOut",
ease: "back.inOut(4)",
// ease: "bounce({strength:0.5, endAtStart:true})",

     scrollTrigger:{
     trigger:".page5 #colon2 ",
     scroller:"body",
    //  markers:true,
     start:"top 70%", 
      end:"top 63%",
     scrub:3.5,
   
 }

})


gsap.to(".center .img-con ",{
   ease: "circ.inOut",
 width:"100%" ,
 duration: 1,
 stagger: 2,

 scrollTrigger:{
    trigger:".center .img-con",
    scroller:"body",
    // markers:true,
    start:"top 50%", 
     end:"top -5%",
    scrub:3.5,
    pin:true,
  
}
})

let boxes = document.querySelectorAll(".st-con")

boxes.forEach(function(box){
    box.addEventListener("mouseenter", function(){
       let arr =  box.getAttribute("data-image");
       cursor.style.width="300px";
       cursor.style.height="300px";
       cursor.style.borderRadius="50%";
       cursor.style.backgroundImage =`url(${arr})`;
     
    })
    box.addEventListener("mouseleave", function(){
      
       cursor.style.width="44px";
       cursor.style.height="45px";
       cursor.style.borderRadius="50%";
       cursor.style.backgroundImage ="url(/pw-screen2.png)";
    })
})

Shery.imageEffect(".allimfof7",{
    style: 1,
    debug: true
})

Shery.makeMagnet("#feaiures")
Shery.makeMagnet(".st-con");

let feaiures = document.querySelector("#feaiures").textContent;
var breakfe = feaiures.split("")
var empty = "";

breakfe.forEach(function(char){
    empty += `<span>${char}</span>`;
})
 let newempty = document.querySelector("#feaiures").innerHTML = empty
 let large1 = document.querySelector(".large1");
let large2 = document.querySelector(".large2");
large1.addEventListener("mouseenter", function(){
    cursor.style.width="62px";
    cursor.style.height="32px";
    cursor.style.borderRadius="8%";
    cursor.style.backgroundImage="none";
    cursor.style.backgroundColor="blue";
    cursor.style.opacity="0.8";
    cursor.innerText = "Click"
    cursor.style.color = "white"
});


large1.addEventListener("mouseleave", function(){
    cursor.style.width="44px";
    cursor.style.height="45px";
    cursor.style.borderRadius="50%";
    cursor.style.backgroundImage="url(/pw-screen2.png)";
    cursor.style.backgroundColor="none";
      cursor.innerText = "";
      cursor.style.opacity="1";
});






large2.addEventListener("mouseenter", function(){
    cursor.style.width="62px";
    cursor.style.height="32px";
    cursor.style.borderRadius="2%";
    cursor.style.backgroundImage="none";
    cursor.style.backgroundColor="grey";
    cursor.style.opacity="0.8";
    cursor.innerText = "Click"
});
large2.addEventListener("mouseleave", function(){
    cursor.style.width="44px";
    cursor.style.height="45px";
    cursor.style.borderRadius="50%";
    cursor.style.backgroundImage="url(/pw-screen2.png)";
    cursor.style.backgroundColor="none";
      cursor.innerText = "";
      cursor.style.opacity="1";
});

  Shery.imageEffect(".large1", {
    style: 6,
    // debug: true,
    gooey: true,
   config:{"noiseDetail":{"value":9.92,"range":[0,100]},"distortionAmount":{"value":1.37,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8149935612557945},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.08,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.96,"range":[0.1,5]},"durationIn":{"value":0.17,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2],"_gsap":{"id":26}},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
  Shery.imageEffect(".large2", {
    style: 6,
    // debug: true,
    gooey: true,
    config:{"noiseDetail":{"value":9.92,"range":[0,100]},"distortionAmount":{"value":1.37,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8149935612557945},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0.08,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.96,"range":[0.1,5]},"durationIn":{"value":0.17,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2],"_gsap":{"id":26}},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

  Shery.textAnimate("#feaiures", {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.textAnimate(".st-con h2", {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: .2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  const images = [
    "/school3.png",
    "/s20.png",
    "/s21.png",
     "/s22.png",
     "/s4.png",
     "/s5.png",
    "/s6.png",
    "/s7.png",
     "/s8.png",
     "/s9.png",
     "/s10.png",
     "/s11.png",
     "/s15.png",
     "/s18.png",
     "/s19.png",
  
  ];


  const centerdiv = document.querySelector(".center");
  const throttleFunction = (func, delay) => {
      let prev = 0;
      return (...args) => {
          let now = new Date().getTime();
          // console.log(now - prev, delay);
          if (now - prev > delay) {
              prev = now;
              return func(...args);
          }
      }
      
  
  }


  centerdiv.addEventListener("mousemove",
      throttleFunction((dets) => {
       var newdiv = document.createElement("div")
      //  console.log(newdiv)
       newdiv.classList.add("imgdiv");
       newdiv.style.left = dets.clientX + "px";
       newdiv.style.top = dets.clientY + "px";
       var newimg = document.createElement("img");
      //  newimg.setAttribute("src", "/school3.png");
       newdiv.appendChild(newimg);
       document.querySelector('.mainmain').appendChild(newdiv);
  gsap.to(newimg, {
    y:"0",
 ease: "sine.out",
    duration:.4,
  })
  gsap.to(newimg, {
    y:"100%",
    delay:.8,
ease: "bounce.out",
  })
  function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    newimg.src = images[randomIndex];
  }
  
  displayRandomImage();
  setTimeout(function () {
    newdiv.remove();
    
  }, 900);
  }, 200));

gsap.from(".center h1",{
  y:100,
opacity:0,

ease: "expo.out",
  duration:1,
  scrollTrigger:{
    trigger: ".center h1",
    // markers:true,
    start: "top 80%",
    end: "top 40%",
    scrub: 2,
    // pin: true,
  }
})

// Shery.textAnimate(".center h1" /* Element to target.*/, {
//   //Parameters are optional.
//   style: 1,
//   y: 10,
//   delay: 0.1,
//   duration: 2,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   multiplier: 0.1,
// });


let scene, camera, renderer, house;
let mouseX = 0;

function init() {
    // Create the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load textures for each side of the cube
    const loader = new THREE.TextureLoader();
    const textures = [
        loader.load('img17.png'),  // front
         loader.load('img10.png'),  // back
         loader.load('img30.png'),  // top
        loader.load('img6.jpg'),  // bottom
       loader.load('img7.jpg'),  // left
         loader.load('img9.png')   // right
    ];

    // Create a cube with the textures on all sides
    const geometry = new THREE.BoxGeometry(2, 2, 2); // 2x2x2 cube
    const materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
    const cubeMaterial = new THREE.MeshFaceMaterial(materials);

    house = new THREE.Mesh(geometry, cubeMaterial);
    scene.add(house);

    camera.position.z = 4;

    // Listen for mouse movement
    window.addEventListener('mousemove', onMouseMove, false);

    animate();
}

function onMouseMove(event) {
    // Normalize mouse position (-1 to 1)
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the house based on mouseX position
    // house.rotation.y = mouseX * Math.PI;  // Left/Right rotation
    // house.rotation.y = mouseX * Math.PI;
    house.rotation.x = mouseY * Math.PI;
    house.rotation.y = mouseX * Math.PI;

    renderer.render(scene, camera);
}

init();





