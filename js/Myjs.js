var srch = document.getElementById("search"),
    srchForm = document.getElementById("search-com"),
    srchX = document.getElementById("search-x");

srch.onclick = function() {
    srchForm.classList.add("come-domn")
}, srchX.onclick = function() {
    srchForm.classList.remove("come-domn")
};
var navShower = document.getElementById("navshowerbtn"),
    navI = document.getElementById("navItems"),
    mNav = document.getElementById("mainNav");
navShower.onclick = function() {
    "none" == navI.style.display ? navI.style.display = "block" : navI.style.display = "none"
};


var logInputs = document.querySelectorAll(".global-form-input");

logInputs.forEach(function(Element){
    Element.oninput = function(){
        "" != this.value ? this.nextElementSibling.classList.add("login-input-Gspan-JS") : this.nextElementSibling.classList.remove("login-input-Gspan-JS");
    }
})

var logP = document.getElementById("log-n"),
    regP = document.getElementById("reg"),
    logD = document.getElementById("logDiv"),
    regD = document.getElementById("regDiv");
logP.onclick = function() {
    logD.style.display = "block", regD.style.display = "none", regP.classList.remove("loginp-f"), logP.classList.add("loginp-f")
}, regP.onclick = function() {
    logD.style.display = "none", regD.style.display = "block", regP.classList.add("loginp-f"), logP.classList.remove("loginp-f")
};
var signS = document.getElementById("sign"),
    signC = document.getElementById("login-com"),
    SignF = document.getElementById("login-formD"),
    signX = document.getElementById("login-exit");
signS.onclick = function() {
    signC.style.display = "block", setTimeout(function() {
        SignF.classList.add("login-form-CD")
    }, 100)
}, signX.onclick = function() {
    SignF.classList.remove("login-form-CD"), setTimeout(function() {
        signC.style.display = "none"
    }, 350)
};
var sideO = document.getElementById("more"),
    sideS = document.getElementById("SmenuSec"),
    sideD = document.getElementById("SmenuDiv"),
    sideX = document.getElementById("sideX");
sideO.onclick = function() {
    sideS.style.display = "block", setTimeout(function() {
        sideD.classList.add("sideD-CL")
    }, 100)
}, sideX.onclick = function() {
    sideD.classList.remove("sideD-CL"), setTimeout(function() {
        sideS.style.display = "none"
    }, 350)
};

let sDivs = document.getElementsByClassName("cusi-sdiv"),
    welOut = document.getElementsByClassName("welcome-out");


document.querySelectorAll(".cusi-li").forEach(function(welSpCat){
    welSpCat.onclick = function(){
        for (a = 0; a < sDivs.length; a++) sDivs[a].style.background = "#eee";
        this.getElementsByTagName("div")[0].style.background = "var(--main-color)";
        for (b = 0; b < welOut.length; b++) welOut[b].style.display = "none";
        document.getElementById(this.getAttribute("wel-cat")).style.display = "block"
    }
})
    

let miS = document.getElementsByClassName("menu-item");

function showAllMenu() {
    for (a = 0; a < miS.length; a++) miS[a].style.display = "flex"
}

document.querySelectorAll(".om-li").forEach(function (menuCat){
    menuCat.onclick = function menuF(){
       for (a = 0; a < miS.length; a++) miS[a].style.display = "none";
       for (b = 0; b < document.getElementsByClassName(this.getAttribute("my-data")).length; b++) document.getElementsByClassName(this.getAttribute("my-data"))[b].style.display = "flex"


    };
})

function loadingF(){
    document.getElementById('loading-sec').style.display = 'none'
}