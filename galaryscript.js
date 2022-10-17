
let flag = 0;
function controler(n) {
    flag = flag + n;
    slideShow(flag);
}
slideShow(flag);
function slideShow(num) {
    let slides = document.getElementsByClassName("slide");

    for (let i of slides) {
        i.style.display = "none";
    }
    if (num == slides.length ) {
        console.log("num="+num)
        num = 0;
        flag = 0;
    }
    if (num < 0) {
        num = slides.length - 1;
        flag = slides.length - 1;
    }

    slides[num].style.display = "block";

}
function previous(n) {
    n = n - 1;
    slideShow(n);
}
function hide2() {
    let x = document.getElementById("galary");

    x.classList.toggle("hide1");
    let y = document.getElementById("seemore");
    if (y.innerText === "SEE MORE") {
        y.innerHTML = "SEE LESS";
    }
    else {
        y.innerHTML = "SEE MORE";
    }
}