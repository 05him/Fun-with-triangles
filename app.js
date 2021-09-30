//````````````````````````````working of buttons```````````````````````````//
let isTriangleBtn = document.querySelector('#isTriangleBtn');
let isTriangleDiv = document.querySelector('#isTriangleDiv');
let areaBtn = document.querySelector('#areaBtn');
let areaDiv = document.querySelector('#areaDiv');
let hypoBtn = document.querySelector('#hypoBtn');
let hypoDiv= document.querySelector('#hypoDiv');
let triangleQuizBtn = document.querySelector('#triangleQuizBtn');
let triangleQuizDiv= document.querySelector('#triangleQuizDiv');
let title = document.querySelector('title');
areaDiv.style.display="none";
hypoDiv.style.display="none";
triangleQuizDiv.style.display="none"

function showHide(show,hide1,hide2,hide3){
    show.style.display="block";
    hide1.style.display="none";
    hide2.style.display="none";
    hide3.style.display="none";
}

isTriangleBtn.addEventListener('click',()=>{
    showHide(isTriangleDiv,triangleQuizDiv,hypoDiv,areaDiv);
    angle1.value="";
    angle2.value="";
    angle3.value="";
    isTriangleOutput.innerText="";
    title.innerText="HiManshu | isTriangle?";

})
triangleQuizBtn.addEventListener('click',()=>{
    showHide(triangleQuizDiv,isTriangleDiv,hypoDiv,areaDiv);
    quizOutput.innerText="";
    for(let q of questions){
        q.style.backgroundColor="white";
    }
    for(let i =0; i<radioBtn.length;i++)    {
        if(radioBtn[i].checked){
            radioBtn[i].checked=false;
        }
    }
    title.innerText="HiManshu | Triangle Quiz";
})
hypoBtn.addEventListener('click',()=>{
    showHide(hypoDiv,isTriangleDiv,triangleQuizDiv,areaDiv);
    a.value="";
    b.value="";
    c.value="";
    hypoOutput.innerText="";
    title.innerText="HiManshu | Hypotenuse";
})
areaBtn.addEventListener('click',()=>{
    showHide(areaDiv,isTriangleDiv,triangleQuizDiv,hypoDiv);
    base.value="";
    height.value="";
    areaOutput.innerText="";
    title.innerText="HiManshu | Area of Triangle";
})

//``````````````````using this fucntion to check wether the input is correct or not``````````````//
function checkFor(n,output){
    if(n.value<0){output.innerText=`🚫${n.id} can't be negative🚫`; return false}
    else if(n.value==="0"){output.innerText=`🚫${n.id} can't be zero🚫`; return false }
    else if (n.value===""){output.innerText=`🚫Pls Enter Value of ${n.id} 🚫`; return false}
    return true;
}

//````````````````````````working of isTriangle ````````````````````````````//

let angle1 = document.querySelector('#Angle1');
let angle2 = document.querySelector('#Angle2');
let angle3 = document.querySelector('#Angle3');
let isTriangleOutput = document.querySelector('#isTriangleOutput');
let isTriangleCheckBtn = document.querySelector('#isTrinagleCheckBtn');
let isTriangleResetBtn = document.querySelector('#isTriangleResetBtn');

function checkForAllAngles(angleOne, angleTwo, angleThree, output){
    let temp3 = checkFor(angleThree,output);
    let temp2= checkFor(angleTwo,output);
    let temp1 = checkFor(angleOne,output);
    if(temp1 && temp2 && temp3){return true}
    return false;
}
function sumOfAngles(angleOne, angleTwo, angleThree){
    return Number(angleOne.value)+Number(angleTwo.value)+Number(angleThree.value);
}
isTriangleCheckBtn.addEventListener('click',()=>{
    isTriangleOutput.style.color="red";
   if( checkForAllAngles(angle1,angle2,angle3,isTriangleOutput)){
       isTriangleOutput.innerText="";
       isTriangleOutput.style.color="black";
       let sum =sumOfAngles(angle1,angle2,angle3);
       if(sum===180){isTriangleOutput.innerText=`The sum of all angles is:${sum}° ,which means \n This is a Triangle🤩🤩`;}
       else {isTriangleOutput.innerText=`The sum of all angles is :${sum}° , which means \n This is not a Triangle😥😥`;}
   }
})
isTriangleResetBtn.addEventListener('click',()=>{
    angle1.value="";
    angle2.value="";
    angle3.value="";
    isTriangleOutput.innerText="";
})

//````````````````````````working of area of Triangle `````````````````````````````//

let base = document.querySelector('#Base');
let height = document.querySelector('#Height');
let areaCalculateBtn = document.querySelector('#areaCalculateBtn');
let areaResetBTn = document.querySelector('#areaResetBtn');
let areaOutput = document.querySelector('#areaOutput');

function checkForAllSides(b,h,output){
    let temp2= checkFor(h,output);
    let temp1 = checkFor(b,output);
    if(temp2 && temp1){return true;}
    return false;
}
areaCalculateBtn.addEventListener('click',()=>{
   areaOutput.style.color="red";
   if(checkForAllSides(base,height,areaOutput)){
       areaOutput.style.color="black";
       let area = (1/2)*Number(base.value)*Number(height.value);
       areaOutput.innerText=`Area of Triangle is ${area}cm\u00B2`
    }
})
areaResetBTn.addEventListener('click',()=>{
    base.value="";
    height.value="";
    areaOutput.innerText="";
})

//```````````````````````````````working of hypo``````````````````````````````````//

let a = document.querySelector('#a');
let b =document.querySelector('#b');
let c= document.querySelector('#c');
let hypoCalculateBtn = document.querySelector('#hypoCalculateBtn');
let hypoResetBtn = document.querySelector('#hypoResetBtn');
let hypoOutput = document.querySelector('#hypoOutput');

function checkAllSides(a,b, output){
    let temp2=checkFor(b,output);
    let temp1 = checkFor(a,output);
    if(temp1 && temp2){return true;}
    return false;
}
hypoCalculateBtn.addEventListener('click',()=>{
    hypoOutput.style.color="red";
    if(checkForAllSides(a,b,hypoOutput)){
        hypoOutput.style.color="black";
        let hypo = Math.sqrt(Math.pow(Number(a.value),2)+Math.pow(Number(b.value),2));
        let dotLength = hypo.toString().indexOf(".");
        if(dotLength<0){c.value=hypo;  }
        else if (dotLength===1){c.value=hypo.toString().slice(0,4);}
        else if(dotLength===2){c.value=hypo.toString().slice(0,5);}
        else if(dotLength===3){c.value=hypo.toString().slice(0,7);}
        else{c.value = hypo;}
        hypoOutput.innerText=`Hypotenuse is ${c.value}cm`;
    }
})
hypoResetBtn.addEventListener('click',()=>{
    a.value="";
    b.value="";
    c.value="";
    hypoOutput.innerText="";
})

//``````````````````````````````````````working of triangle quiz````````````````````````````````//
let form = document.querySelector('.questionForm');
let questions =document.querySelectorAll('.questions');
let quizCheckBtn= document.querySelector('#quizCheckBtn');
let quizResetBtn = document.querySelector('#quizResetBtn');
let quizOutput = document.querySelector('#quizOutput');
let radioBtn = document.querySelectorAll('input[type="radio"]');
quizCheckBtn.addEventListener('click',()=>{
    let formData = new FormData(form);
let checkQuestionNumber=0;
let ansList=["equi","no","180","70","obtuse","acute"];
let temp = 0;
let score=0;
for(let entry of formData.entries()){
    checkQuestionNumber++;
}

if(checkQuestionNumber===6){
    for(let value of formData.values()){
        if(value===ansList[temp]){
            score+=1;
            questions[temp].style.backgroundColor="green";
        }
        if(value!=ansList[temp]){
            questions[temp].style.backgroundColor="red";
        }
        temp+=1;
    }
    temp=0; 
    quizOutput.innerText=`Your score is ${score}`;
}
else{
    quizOutput.style.color="red";
quizOutput.innerText="Pls Give all the answers";
}
})
quizResetBtn.addEventListener('click',()=>{
    quizOutput.innerText="";
    for(let q of questions){
        q.style.backgroundColor="white";
    }
    for(let i =0; i<radioBtn.length;i++)    {
        if(radioBtn[i].checked){
            radioBtn[i].checked=false;
        }
    }
})