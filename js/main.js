//get html elements
const container = document.querySelector('.razer-blade-bg');
const img = document.querySelector(".razer-img");

//moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mousemove", (e) => {
    img.style.transform= "translateZ(80px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    img.style.transition = "all 0.5s ease";
    container.style.transform = `rotateY(0deg) rotateX(0deg)`;
});