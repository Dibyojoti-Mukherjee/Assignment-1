let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
let c = 0; let x;


function lap() {
    if (timer) {
        let hrstring = hr;
        let minString = min;
        let secString = sec;
        let countString = count;
        c++;

        if (hr < 10) {
            hrstring = "0" + hrstring;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }


        let ele = document.getElementById("laptext");
        let text = document.createTextNode("LAP " + c + " : " + hrstring + " Hr " + minString + " Min " + secString + " Sec ");
        let br = document.createElement("br")
        ele.appendChild(br)
        ele.appendChild(text);
        ele.style.fontSize = "20px";
    }
}
function start() {
    if (!timer) {

        timer = true;
        x = setInterval("changeSecond()", 1000);
    }
}
function stop() {
    timer = false;
    clearInterval(x);
}
function reset() {
    timer = false;
    clearInterval(x);
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    let ele = document.getElementById("laptext").innerHTML = "";
    c = 0;
    hr = 0;
    sec = 0;
    min = 0;


}
function changeSecond() {
    if (timer == true) {
        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;;
        }

        let hrstring = hr;
        let minString = min;
        let secString = sec;

        if (hr < 10) {
            hrstring = "0" + hrstring;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }

        document.getElementById("hr").innerHTML = hrstring;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        // document.getElementById("count").innerHTML = countString;
    }
}


