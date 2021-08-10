// Color changing Navbar on Scroll

let oldValue = 0
let newValue = 0
window.addEventListener('scroll', (e) => {
newValue = window.pageYOffset;

function turnBlack() {
    var x, i;
    x = document.querySelectorAll(".link");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
}

function turnWhite() {
    var x, i;
    x = document.querySelectorAll(".link");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
}

function turnTealHover() {
    var x, i;
    x = document.querySelectorAll(".link");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('HoverClass2');
        x[i].classList.add("HoverClass1");
    }
}

function turnGreyHover() {
    var x, i;
    x = document.querySelectorAll(".link");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('HoverClass1');
        x[i].classList.add("HoverClass2");
    }
}

if (oldValue < newValue) {
    document.getElementById("navbar").style.position = "absolute";

}
if (oldValue > newValue) {
    document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.9)";
    document.getElementById("navbar").style.position = "fixed";
    document.querySelector("#navbar a").style.color = "black";
    var Button = document.querySelector("#navbar a");
    Button.classList.remove('HoverClass2');
    Button.classList.add("HoverClass1");
    turnTealHover();
    turnBlack();
}
if (window.scrollY==0) {
    document.getElementById("navbar").style.background = "transparent";
    document.querySelector("#navbar a").style.color = "white";
    turnWhite();
    var Button = document.querySelector("#navbar a");
    Button.classList.remove('HoverClass1');
    Button.classList.add("HoverClass2");
    turnGreyHover();
}

oldValue = newValue;
});

// Tooltips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})