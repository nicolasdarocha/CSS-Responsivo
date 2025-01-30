let btn1_Clicked,btn2_Clicked, btn3_Clicked = false;
function float() {
    if (btn1_Clicked == false) {
        document.getElementById("newAction").style.display = "inline";
        btn1_Clicked = true;
    } else {
        document.getElementById("newAction").style.display = "none";
        btn1_Clicked = false;
    }
}

function CardLocal() {
    if (btn3_Clicked == false) {
        document.getElementById("formLocal").style.display = "flex";
        btn3_Clicked = true;
    } else {
        document.getElementById("formLocal").style.display = "none";
        btn3_Clicked = false;
    }
}