/* 1 */ 
let input=document.getElementById('myInput');
let inputTwo=document.getElementById('myInput2');
let button=document.getElementById('button');
let sum=document.getElementById('sum');

button.onclick=function() {
    let num=Number(input.value)+Number(inputTwo.value);
    
    sum.textContent=num;
}


/* 2 */

let myInput3=document.getElementById('myInput3');
let button1=document.getElementById('button1');
let posit=document.getElementById('posit');

button1.onclick=function() {
    let chislo=Number(myInput3.value);
    if(chislo==0){
        posit.textContent='Zero';
    }  else if(chislo>0){
        posit.textContent='positiv';
    } else{
        posit.textContent='negativ';
    }
}

/* 3 */
let chet1=document.getElementById('chet1');
let button2=document.getElementById('button2');
let num=document.getElementById('num');

button2.onclick=function() {
    let chislo=Number(chet1.value)%2;
    if(chislo==0){
        console.log('Ok');
     num.textContent='четное';
    }  else{
       let chislo2= Number(chet1.value)+1;
        console.log(chislo2);
        num.textContent='нечетное';

    }
}

/* 4 */

let num1=document.getElementById('num1');
let num2=document.getElementById('num2');
let calc=document.getElementById('calc');

let plus=document.getElementById('plus');
let minus=document.getElementById('minus');
let division=document.getElementById('division');
let multiplic=document.getElementById('multiplic');

calc.onclick=function(){
    plus.textContent='Сложение: ' + (Number(num1.value)+Number(num2.value));
    minus.textContent='Вычитание: ' + (Number(num1.value)-Number(num2.value));
    division.textContent='Деление: ' + (Number(num1.value)/Number(num2.value));
    multiplic.textContent='Умножение: ' + (Number(num1.value)*Number(num2.value));
}


/* 5 */

let rost=document.getElementById('rost');
let okr=document.getElementById('okr');
let getFat=document.getElementById('getFat');
let gender=document.getElementById('gender');

getFat.onclick=function(){ 
    if(gender.value=='man')
    {
     fatResult.textContent='Процент жира: ' + (64-(20*Number(rost.value)/Number(okr.value)))+'%';
    }
    else{
     fatResult.textContent='Процент жира: ' + (76-(20*Number(rost.value)/Number(okr.value)))+'%';
    }


}