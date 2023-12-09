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
    while (i<inputDividersValue-1){ // отнимаем 1 чтобы не включать само число
        ++i; 
        //условие если делиться без остатка
        if(inputDividersValue%i===0){
            arr[0+a]=i;// записываем в массив
            ++a;
        }
    }
    let str = arr.join(', '); //соединяем массив через запятую

    // условие если массив пустой
    if(arr.length===0){
        elementParagraph.textContent='Простое число'; //вставляем в абзац  
    } else{    
        elementParagraph.textContent=str; //вставляем массив в абзац  
    }

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
    //цикл по нахождению суммы пока i не больше числа
    while (i<=inputChisloValue){
        a+=i; // к переменной a прибавляем i и записываем
        ++i;
    }   
    elementParagraph.textContent=a; //вставляем в абзац итог       
    res4.append(elementParagraph); // вставляем в див с id res4
}
button5.addEventListener('click', summa);



/* Сумма квадратов всех чисел */

let inputChislo2 = document.querySelector('#inputChislo2');
let res5 = document.querySelector('#res5');

function quad(){
    let inputChislo2Value=Number(inputChislo2.value);
    let elementParagraph = document.createElement('p'); //создаем абзац
    
    let a=0;   
    let b;
    let i=1;      
    while(i<=inputChislo2Value){
        b = i*i; // записываем результат квадрата числа
        a += b; // записываем и суммируем с предыдущим результатом
        ++i;
    }

    elementParagraph.textContent=a; //вставляем в абзац результат     
    res5.append(elementParagraph); // вставляем в див с id res5
}
button6.addEventListener('click',quad);



/* Проверка числа на простоту */

let inputChislo3 = document.querySelector('#inputChislo3');
let res6 = document.querySelector('#res6');

function prostota(){ 
    let inputChislo3Value=Number(inputChislo3.value);
    let elementParagraph = document.createElement('p'); //создаем абзац

    let i=1;
    while(i<inputChislo3Value){
        ++i;
        // условие если нет остатка или индекс равен числу пользователя(для двойки)
        if(inputChislo3Value%i!==0 || inputChislo3Value===i ){
            elementParagraph.textContent='Простое число'; 
        } else{
            elementParagraph.textContent='Непростое число'; 
            break;//прерываем цикл при первом же исполнении
        }
    }    
    res6.append(elementParagraph); // вставляем в див с id res6

}
button7.addEventListener('click', prostota);
