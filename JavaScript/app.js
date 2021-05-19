const hamb = document.getElementsByClassName("hamb-icon")[0];
const nav = document.querySelector("nav");
var workImg = document.getElementsByClassName("sample");
const comment = document.getElementsByClassName("comment")[0];

function toggleNav() {

    navDisplay = window.getComputedStyle(nav, null).getPropertyValue("display");

    if (navDisplay == "none") {
        nav.style.display = "block";
        hamb.classList.add("cross-hamb-icon");
    }

    else {
        nav.style.display = "none";
        hamb.classList.remove("cross-hamb-icon");
    }
}



function whichImageIsVisible() {

    for (var n=0; n<workImg.length; n++) {
        if (workImg[n].getAttribute("highlight")=="yes") {
            return n;
        }
    }
}

function goForward() {
    var v = whichImageIsVisible();
    if (v!==2) {
        workImg[v].setAttribute("highlight", "no");
        workImg[v+1].setAttribute("highlight", "yes");
        if (v+1==0) {
            comment.innerHTML = `I am very satisfied with the value and <u>top-notch quality</u>they provide. <span>~ Ali Sohail</span>`;
        }
        if (v+1==1) {
            comment.innerHTML = `I was impressed with the speed of their work, would <u>definitely suggest them</u> to my fellows. <span>~ John Doe</span>`;
        }

        if (v+1==2) {
            comment.innerHTML = `I was amazed with the creativity and plethora of ideas they had, <u>absolutely stunning</u><span>~ Ali Khan</span>`;
        }
    }

    else {
        goBackward();
    }
}

function goBackward() {
    var v = whichImageIsVisible();
    if (v!==0) {
        workImg[v].setAttribute("highlight", "no");
        workImg[v-1].setAttribute("highlight", "yes");
        if (v-1==0) {
            comment.innerHTML = `I am very satisfied with the value and <u>top-notch quality</u>they provide. <span>~ Ali Sohail</span>`;
        }
        if (v-1==1) {
            comment.innerHTML = `I was impressed with the speed of their work, would <u>definitely suggest them</u> to my fellows. <span>~ John Doe</span>`;
        }

        if (v-1==2) {
            comment.innerHTML = `I was amazed with the creativity and plethora of ideas they had, <u>absolutely stunning</u><span>~ Ali Khan</span>`;
        }
    }

    else {
        goForward();
    }
}