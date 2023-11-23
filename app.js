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


/* 3 */

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