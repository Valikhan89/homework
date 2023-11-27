/* --- */
let inputNum1=document.getElementById('inputNum1');
let inputNum2=document.getElementById('inputNum2');

button1.onclick=function(){
    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);

    let result=(num1+num2)/2;
    res.textContent='Среднее чисел: '+result;

    }


/* --- */

let inputNum3=document.getElementById('inputNum3');
let inputNum4=document.getElementById('inputNum4');

button2.onclick=function(){
    let num3=Number(inputNum3.value);
    let num4=Number(inputNum4.value);

    let result=num3%num4;
    
    if(num4==0||isNaN(num3)||isNaN(num4)){
        res2.textContent='Некорректное число';
    } else if(result==0){
        res2.textContent='Без остатка';
    } else if(num4>num3){
        res2.textContent='Остаток: ' +result+'. Нужно к первому числу добавить: '+(num4-result);        
    }else{        
        res2.textContent='Остаток: ' +result;
    }
}

/* --- */

let inputNum5=document.getElementById('inputNum5');
let inputNum6=document.getElementById('inputNum6');
let plusBtn =document.getElementById('plusBtn');
let minusBtn =document.getElementById('minusBtn');
let multiBtn =document.getElementById('multiBtn');
let divisionBtn =document.getElementById('divisionBtn');
let calculateBtn =document.getElementById('calculateBtn');
let operator

plusBtn.onclick=function(){
    plusBtn.classList.remove('green');
    minusBtn.classList.remove('green');
    multiBtn.classList.remove('green');
    divisionBtn.classList.remove('green');
    operator="+";
    plusBtn.classList.add('green');
}
minusBtn.onclick=function(){
    plusBtn.classList.remove('green');
    minusBtn.classList.remove('green');
    multiBtn.classList.remove('green');
    divisionBtn.classList.remove('green');
    operator="-";
    minusBtn.classList.add('green');
}
multiBtn.onclick=function(){
    plusBtn.classList.remove('green');
    minusBtn.classList.remove('green');
    multiBtn.classList.remove('green');
    divisionBtn.classList.remove('green');
    operator="*";
    multiBtn.classList.add('green');
}
divisionBtn.onclick=function(){
    plusBtn.classList.remove('green');
    minusBtn.classList.remove('green');
    multiBtn.classList.remove('green');
    divisionBtn.classList.remove('green');
    operator="/";
    divisionBtn.classList.add('green');
}

calculateBtn.onclick=function(){
    let num5=Number(inputNum5.value);
    let num6=Number(inputNum6.value);

    let result;
    if(isNaN(num5)||isNaN(num6)){
        result='Некорректное число';
    } else {
        if(operator=="+"){
            result=num5+num6;
        } else if(operator=="-"){
            result=num5-num6;
        } else if(operator=="*"){
            result=num5*num6;
        } else if(operator=="/"){
            if(num6==0){
                result='Некорректное число';
            }else{
                result=num5/num6;
            }
        } else{
            result='Выберите действие';
        }
    }
    res3.textContent='= '+result;
}

