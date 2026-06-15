
// Typing Animation

const text =
"Master Modern SEO & Technical Optimization";

const typingText =
document.getElementById("typing-text");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typingText.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);
    }
}

typeWriter();


// Reveal Animation

const reveals =
document.querySelectorAll(".reveal");

function reveal(){

    reveals.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const top =
        element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);


// Counter Animation

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;
        }
    }

    updateCounter();
});


// Cursor Glow

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left =
    e.clientX - 150 + "px";

    glow.style.top =
    e.clientY - 150 + "px";
});


// Contact Form Demo

document.querySelector("form")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "Message Sent Successfully!"
    );
});

