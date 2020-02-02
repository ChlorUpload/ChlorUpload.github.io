let selected = 1;
updateButtons(1);

function updateButtons(num) {
    selected = num;
    btnimgA = document.getElementById("btnimgA");
    btnimgB = document.getElementById("btnimgB");
    btnimgC = document.getElementById("btnimgC");
    btnimgD = document.getElementById("btnimgD");
    btnimgA.src="res/button_A_disabled.png";
    btnimgB.src="res/button_B_disabled.png";
    btnimgC.src="res/button_C_disabled.png";
    btnimgD.src="res/button_D_disabled.png";

    switch(num)
    {
    case 1:
        btnimgA.src="res/button_A_abled.png";
        break;
    case 2:
        btnimgB.src="res/button_B_abled.png";
        break;
    case 3:
        btnimgC.src="res/button_C_abled.png";
        break;
    case 4:
        btnimgD.src="res/button_D_abled.png";
        break;
    }
}

function buttonA() {
    updateButtons(1);
}

function buttonB() {
    updateButtons(2);
}

function buttonC() {
    updateButtons(3);
}

function buttonD() {
    updateButtons(4);
}

function buttonE() {
    
}

function buttonConfirm() {

}