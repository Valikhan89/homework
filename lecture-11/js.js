"use strict"

/* Вывод времени */

const time=document.getElementById('inputTime');
const timeInter=document.getElementById('timeInter');

button.onclick=function(){
    let hourMinut=time.value;
    let interval=timeInter.value;
    let arr = hourMinut.split(':'); //делаем массив по ":"

    let arrItem1;
    let str;

    //Условие выбора времени суток
    if (interval=='2'){ // Выбрано PM
        
        if(arr[0]==12){   //условие когда  12 часов у pm
            arrItem1 = Number(arr[0]);
        }else{
            arrItem1 = Number(arr[0])+12;
        }

        //Условие на корректность введеного времени
        if(arr[0]<=12 && arr[1]<60){              
            arr[0]=arrItem1;
            str = arr.join(':'); //соединяем элементы массива
            res.textContent=str;  
        } else{            
            res.textContent='Некорректные данные';  
        }

    } else if(interval=='1') { // Выбрано AM

        if(arr[0]==12){     //условие что делать когда 12 часов у am      
            arr[0]='0';
        }
        
        //Условие на корректность введеного времени
        if(arr[0]<=12 && arr[1]<60){   
            arrItem1 = arr[0].padStart(2, '0');// добавление 0
            arr[0]=arrItem1;
            str = arr.join(':'); //соединяем элементы массива
            res.textContent=str;   
        }   else{            
            res.textContent='Некорректные данные';  
        }
    }else{   // не выбран интервал времени суток      
        res.textContent='Введите интервал';  
    }
}


/* Максимум из 2 чисел */

const inputTwoNumber = document.getElementById('inputTwoNumber');

function twoNumber(){
   let twoNumberValue = inputTwoNumber.value;
   let arrTwoNumber = twoNumberValue.split('-'); //делаем массив по "-"
    if(Number(arrTwoNumber[0])>Number(arrTwoNumber[1])){
        res2.textContent=arrTwoNumber[0];
    } else{
        res2.textContent=arrTwoNumber[1];
    }

}


/* Високосный год */

const inputYear = document.getElementById('inputYear');

function visYear(){
    let inputYearValue = Number(inputYear.value);
    let YearValue =inputYearValue%4;
    if(YearValue==0){
        res3.textContent='Yes';
    } else{
        res3.textContent='No';
    }

}


/* Максимум из 3 чисел */

const inputThreeNumberMax = document.getElementById('inputThreeNumberMax');

function threeNumberMax(){
   let ThreeNumberMaxValue = inputThreeNumberMax.value;
   let arrThreeNumber = ThreeNumberMaxValue.split('-'); //делаем массив по "-"
    if(Number(arrThreeNumber[0])>=Number(arrThreeNumber[1])){ // условие сравниваем 1 и 2 элемент
        if(Number(arrThreeNumber[0])>=Number(arrThreeNumber[2])){  // условие сравниваем 1 и 3 элемент                
            res4.textContent=arrThreeNumber[0];
        } else {             
            res4.textContent=arrThreeNumber[2];
        }
    } else{
        if(Number(arrThreeNumber[1])>=Number(arrThreeNumber[2])){   // условие сравниваем 2 и 3 элемент           
            res4.textContent=arrThreeNumber[1]; 
        } else {             
            res4.textContent=arrThreeNumber[2];
        }
    }

}



/* Минимум из 3 чисел */

const inputThreeNumberMin = document.getElementById('inputThreeNumberMin');

function threeNumberMin(){
   let ThreeNumberMinValue = inputThreeNumberMin.value;
   let arrThreeNumber = ThreeNumberMinValue.split('-'); //делаем массив по "-"
    if(Number(arrThreeNumber[0])<=Number(arrThreeNumber[1])){ // условие сравниваем 1 и 2 элемент
        if(Number(arrThreeNumber[0])<=Number(arrThreeNumber[2])){  // условие сравниваем 1 и 3 элемент                
            res5.textContent=arrThreeNumber[0];
        } else {             
            res5.textContent=arrThreeNumber[2];
        }
    } else{
        if(Number(arrThreeNumber[1])<=Number(arrThreeNumber[2])){   // условие сравниваем 2 и 3 элемент           
            res5.textContent=arrThreeNumber[1]; 
        } else {             
            res5.textContent=arrThreeNumber[2];
        }
    }

}

/* найти Х */

const a = document.getElementById('a');
const b = document.getElementById('b');

function findX(){
   let aValue= Number(a.value);
   let bValue= Number(b.value);
   let x= -bValue/aValue;
   if (x > 0 && x < 1){
        res6.textContent="-1; x="+x;
   } else if(x>=1){
        res6.textContent="1;  x="+x;
   } else{
        res6.textContent="x="+x;
   }
}


/* Подсчет сдачи */

const aRub = document.getElementById('aRub');
const bRub = document.getElementById('bRub');

function change(){
    let aRubValue = aRub.value;
    let bRubValue = bRub.value;
    let arrARubValue = aRubValue.split('.'); //делаем массив по "." a
    let arrBRubValue = bRubValue.split('.'); //делаем массив по "." b

    let summRub = Number(arrBRubValue[0])-Number(arrARubValue[0]);
    let summKop = Number(arrBRubValue[1])-Number(arrARubValue[1]);

    if(summKop<0) { // при условии что копеек отрицательное число вычитаем от рубля
        summKop = 100+summKop;
        summRub = summRub-1;
    } 

    let arrRub = [];
    arrRub[0] = summRub;
    arrRub[1] = summKop;

    if(isNaN(summRub)||isNaN(summKop)){ // если NAN
        res7.textContent='Некорректный формат';
    } else{
        if(summRub>=0){  
            res7.textContent=`Сдача: ${summRub} рублей ${summKop} копеек`;
        } else {
            res7.textContent='Не хватает денег';
        }
    }
}



/* Подсчет шариков мороженного */

const inputIcecream = document.getElementById('inputIcecream');

function iceCream(){
    let inputIcecreamValue = Number(inputIcecream.value);
	
	
    let icecreamFive = inputIcecreamValue%5;
    if (icecreamFive>=3){     // условие если остаток равен или больше 3   
        icecreamFive = icecreamFive%3;
    }    

    let icecreamThree = inputIcecreamValue%3;
		

    if(icecreamFive===0 || icecreamThree===0){
        res8.textContent='Можно';
    } else {     
        res8.textContent='Нельзя';
    }
	
}



/* Подсчет времени жарки котлет */

const inputKotletMesto = document.getElementById('inputKotletMesto');
const inputKotletTime = document.getElementById('inputKotletTime');
const inputKotletAll = document.getElementById('inputKotletAll');

function kotlet(){
	let inputKotletMestoValue = Number(inputKotletMesto.value);
	let inputKotletTimeValue = Number(inputKotletTime.value);
	let inputKotletAllValue = Number(inputKotletAll.value);
	
	// Проверка на NAN
    if(isNaN(inputKotletMestoValue)||isNaN(inputKotletTimeValue)||isNaN(inputKotletAllValue)){ 	
        res9.textContent='Некорректный формат';	
		
	} else {
	
		// Условие все числа не привосходят 32000
		if (inputKotletMestoValue<=32000 && inputKotletTimeValue<=32000 && inputKotletAllValue<=32000){
			
			// Подсчет сколько порций понадобится
			let porcii = Math.ceil(inputKotletAllValue/inputKotletMestoValue);
			
			// Подсчет времени жарки 1 порции
			let porciyaTime = 2*inputKotletTimeValue;
			
			// Подсчет времени затраченное на всю обжарку	
			let allTime = porcii*porciyaTime; 
			
			res9.textContent=`${allTime} минуты`;
		} else {
			res9.textContent=`Число больше 32000`;		
		}
	}
}












