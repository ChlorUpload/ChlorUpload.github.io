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
let answer_text = '';

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
        windowtitle.innerHTML = 'Answer. '+answer_text;
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

    console.log('axios')

    pText = 'Quiz number '+String(quiz_num);
    aText = 'Answer'+String(quiz_num);

    axios.get('data/'+String(quiz_num)+'.part5')
        .then( function (response) {
            pText = JSON.stringify(response.data, null, '\t');
            pText = pText.replace(/\\n/gi, '<br>');
            var a = pText.lastIndexOf('.');
            pText= pText.substring( 1, a+1 )
            pText= pText.replace("문항#", '');
            var splited = pText.split("답#");
            pText= splited[0];
            var splited2 = splited[1].split("주석#");
            answer_text = splited2[0];
            aText=splited2[1];
            show();
        })
        .catch( function (error) {
            console.log(error);
            pText = 'Quiz Loading Error';
            show();
        });
    
    if(quiz_num < quizmax) {
        quiz_num++;
    }
    else {
        quiz_num=1;
    }
}