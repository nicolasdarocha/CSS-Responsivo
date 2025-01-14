let clicked = false;
function float() {
    if (clicked == false) {
        document.getElementById("newAction").style.display = "inline";
        clicked = true;
    } else {
        document.getElementById("newAction").style.display = "none";
        clicked = false;
    }
}
