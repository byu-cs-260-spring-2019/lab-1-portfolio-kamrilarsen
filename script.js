
var currentBackground = "background1";
function clickedButton() {
    if(currentBackground == "background1") {
        document.body.style.backgroundImage = "url('Images/background2.jpg')";
        currentBackground = "background2";
    }
    else if(currentBackground == "background2") {
        document.body.style.backgroundImage = "url('Images/background3.jpg')";
        currentBackground = "background3";
    }
    else {
        document.body.style.backgroundImage = "url('Images/background.jpg')";
        currentBackground = "background1";
    }
}


//if the background is background 1, put at background 2
//if the background is background 2, put at background 3
//if the background is background 3, put at background 1