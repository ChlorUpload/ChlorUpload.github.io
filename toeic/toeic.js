let windowtitle = document.getElementById("windowtitle");
let windowtext = document.getElementById("windowtext");
let btnimgA = document.getElementById("btnimgA");
let btnimgB = document.getElementById("btnimgB");
let btnimgC = document.getElementById("btnimgC");
let btnimgD = document.getElementById("btnimgD");
let btnimgSubmit = document.getElementById("btnimgSubmit");
let btnA = document.getElementById("btnA");
let btnB = document.getElementById("btnB");
let btnC = document.getElementById("btnC");
let btnD = document.getElementById("btnD");

let pText = 'quiz_text';
let aText = 'answer_text';

let selected = 1;
updateButtons(1);

let quiz_num = 1;
getNewRandomQuiz();

const showtype_quiz = 1;
const showtype_answer = 2;
let showtype = showtype_quiz;
show();

function updateButtons(num) {
    selected = num;
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

function buttonSubmit() {
    if (showtype == showtype_quiz)
    {
        showtype = showtype_answer;
    }
    else if (showtype == showtype_answer)
    {
        getNewRandomQuiz();
        selected = 1;
        updateButtons(1);
        showtype = showtype_quiz;
    }
    show();
}

function show() {

    if (showtype == showtype_quiz)
    {
        windowtitle.innerHTML = 'Quiz.';
        windowtext.innerHTML = pText;
        btnA.style.visibility='visible';
        btnB.style.visibility='visible';
        btnC.style.visibility='visible';
        btnD.style.visibility='visible';
        btnimgSubmit.src="res/button_submit.png";
    }
    else if (showtype == showtype_answer)
    {
        windowtitle.innerHTML = 'Answer.';
        windowtext.innerHTML = aText;
        btnA.style.visibility='hidden';
        btnB.style.visibility='hidden';
        btnC.style.visibility='hidden';
        btnD.style.visibility='hidden';
        btnimgSubmit.src="res/button_next.png";
    }
}

function getNewRandomQuiz(){

    test = document.getElementById("test");

    pText = 'quiz'+String(quiz_num);
    aText = 'answer'+String(quiz_num);

    axios.get('data/'+String(quiz_num)+'.part5')
        .then( function (response) {
            pText = JSON.stringify(response.data, null, '\t');
        })
        .catch( function (error) {
            pText = "Error occured."
        });
    
    quiz_num++;
}