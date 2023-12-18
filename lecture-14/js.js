'use strict'

const input = document.querySelector('#input');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const res = document.querySelector('#res');
const res1 = document.querySelector('#res1');
const res2 = document.querySelector('#res2');
const res3 = document.querySelector('#res3');

let task=[];




/* Вывод */
function taskAll(){
    
    if(task.length>0){
        res.textContent=`Все созданные задачи: ${task}`;
    } else{
        res.textContent=`Задач нет`;
    }

}
button.addEventListener('click', taskAll);



/* добавление */
function taskAdd(){
    let inputValue=input.value;
    task.push(inputValue);

    res1.textContent=`Добавлена задача ${task}`;

}
button1.addEventListener('click', taskAdd);




/* найти */
function taskFind(){
    let input2Value=input2.value;    
    let taskFilter = task.filter(name => name === input2Value);

    if(taskFilter.length>0){
        res2.textContent=`Найдены задачи: ${taskFilter}`;
    } else{
        res2.textContent=`Задача:  ${input2Value} не найдена`;
    }


}
button2.addEventListener('click', taskFind);





/* удаление */
function taskDel (){    
    let input3Value=input3.value;

    // Ищем индекс элемента в массиве
    let index = task.indexOf(input3Value);

    // Если элемент найден, удаляем его
    if (index !== -1) {
        task.splice(index, 1);
        res3.textContent=`Задача удалена:  ${input3Value}`;
    } else {
        res3.textContent=`Элемент  ${input3Value} не найден`;
    }
}
button3.addEventListener('click', taskDel);