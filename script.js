const questionbank=[
    {
        question:"Q1 - Which of the following is true about variable naming conventions in JavaScript?",
        a:" JavaScript variable names must begin with a letter or the underscore character.",
        b:"JavaScript variable names are case sensitive.",
        c:"Both of the above.",
        d:"None of the above.",
        ans:"ansC"
    },{
        question:"Q2 - How can you get the total number of arguments passed to a function?",
        a:"Using args.length property",
        b:"Using arguments.length property",
        c:"Both of the above.",
        d:"None of the above.",
        ans:"ansB"
    },
    {
        question:"Q3 - Which built-in method returns the length of the string?",
        a:"length()",
        b:"getSubstring()",
        c:"slice()",
        d:"None of the above.",
        ans:"ansA"

    },
    {
        question:"Q4 - Which built-in method returns the characters in a string beginning at the specified location?",
        a:"substr()",
        b:"charCodeAt()",
        c:"concat()",
        d:"indexOf()",
        ans:"ansB"  
    },
    {
        question:"Q5 - Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
        a:"charAt()",
        b:"charCodeAt()",
        c:"concat()",
        d:"indexOf()",
        ans:"ansB"  
    },
    {
       question: "Q6 - Which of the following function of String object executes the search for a match between a regular expression and a specified string?",
        a: "concat()",
        b:"match()",
        c:"replace()",
        d:"search()",
        ans:"ansD"
    },
    {
       question: "Q7 - Which of the following function of String object returns a string representing the specified object?",
        a:" toLocaleUpperCase()",
        b:"toUpperCase()",
        c:"toString()",
        d:"substring()",
    },
    {
        question:"Q8 - Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?",
        a:"fixed()",
        b:"big()",
        c:"blink()",
        d:"bold()",
    }
]

const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");

const answers=document.querySelectorAll(".answers");
const showscore=document.querySelector("#showscore");


let count=0;
let score=0;

const loadquestion=()=>{
    const questionList=questionbank[count];
    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option2.innerText=questionList.c;
    option2.innerText=questionList.d;
}

loadquestion();


const getcheckedanser=()=>{
      let answer;
     answers.forEach((value)=>{
        if(value.checked){
            answer=value.id;
        }
     })
     return answer;
};
const deleteradio=()=>{

    answers.forEach((value)=>{
        return value.checked=false;
    })
}

submit.addEventListener('click',()=>{
    const getanswer= getcheckedanser();
    console.log(getanswer);

    if(getanswer==questionbank[count].ans){
        score++;
    }
    count++;
    if(count<questionbank.length){
        loadquestion();
        deleteradio();
        
    }else{
        showscore.innerHTML=`
        <h1>your score is ${score} out of ${questionbank.length}</h1>
        <button class="btn" onclick="location.reload()">play again</button>
        `;

        showscore.classList.remove("scorearea");
    }
})

