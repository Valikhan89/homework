"use strict"

/* Вычислить факториал */

let inputFactorial=document.querySelector('#inputFactorial');
let enter=document.querySelector('.enter');

function factorial(){
    let inputFactorialValue=Number(inputFactorial.value);    

    let i=1;
    let a=1;
    //цикл перемножаем пока не больше введенного числа
    while(i<=inputFactorialValue){
        a*=i;    
        ++i;
    }
    let elementParagraph = document.createElement('p'); //создаем абзац
    elementParagraph.textContent=a; //вставляем итог цикла
    enter.append(elementParagraph);  // вставляем в див с классом enter
}
button.addEventListener('click', factorial);



/* Вычислить 2 в степени */

let inputStepen=document.querySelector('#inputStepen');
let res=document.querySelector('#res');

function stepen(){
    let inputStepenValue=Number(inputStepen.value);
    let i=2;
    let result=2;
    //цикл перемножение по i не больше введенного числа
    while(i<=inputStepenValue){
        result*=2;
        ++i;
    }
    let stepenResultParag=document.createElement('p') //создаем абзац
    stepenResultParag.textContent=result; //вставляем итог цикла
    res.append(stepenResultParag);// вставляем в див с id res
}
button2.addEventListener('click', stepen);




/* Вычислить наименьший натуральный делитель */

let inputDelitel=document.querySelector('#inputDelitel');
let res2=document.querySelector('#res2');

function delitel(){
    let inputDelitelValue=Number(inputDelitel.value);

    let elementParagraph=document.createElement('p'); //создаем абзац

    // Условие корректного заполнения
    if(inputDelitelValue<2||isNaN(inputDelitelValue)){
        elementParagraph.textContent='Неверное значение';
    } else {
        let i=2;
        //цикл по вычислению
        while(i<=inputDelitelValue){
            // условие если делиться без остатка
            if(inputDelitelValue%i===0){
                break; //остановка
            }
            ++i;
        }

        elementParagraph.textContent=i; //вставляем итог цикла
    }

    res2.append(elementParagraph);// вставляем в див с id res2
}
button3.addEventListener('click', delitel);



/* Все делители числа */

let inputDividers=document.querySelector('#inputDividers');
let res3 = document.querySelector('#res3');

function dividers(){
    let inputDividersValue=Number(inputDividers.value);

    let elementParagraph=document.createElement('p'); //создаем абзац

    let i=1;
    let a=0; //переменная для массива
    let arr=[]; //создаем массив

    //цикл по нахождению делителей
    while (i<inputDividersValue-1){
        ++i;
        //условие если делиться без остатка
        if(inputDividersValue%i===0){
            arr[0+a]=i;// записываем в массив
            ++a;
        }

    }
    let str = arr.join(', '); //соединяем массив через запятую

    elementParagraph.textContent=str; //вставляем массив в абзац
        
    res3.append(elementParagraph); // вставляем в див с id res3

}

button4.addEventListener('click', dividers);



/* Сумма всех натуральных чисел */

let inputChislo=document.querySelector('#inputChislo');
let res4 = document.querySelector('#res4');

function summa(){
    let inputChisloValue=Number(inputChislo.value);

    let elementParagraph=document.createElement('p'); //создаем абзац

    let i=1;
    let a=0;
    //цикл по нахождению суммы
    while (i<=inputChisloValue){
        a+=i;
        ++i;
    }   

    elementParagraph.textContent=a; //вставляем в абзац        
    res4.append(elementParagraph); // вставляем в див с id res4

}

button5.addEventListener('click', summa);
