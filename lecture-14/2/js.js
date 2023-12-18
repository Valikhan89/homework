'use strict'

const inputTitle = document.querySelector('#inputTitle');
const inputTask = document.querySelector('#inputTask');
const selectCat = document.querySelector('#selectCat');
const send = document.querySelector('#send');
const selectDel = document.querySelector('#selectDel');
const del = document.querySelector('#del');

function task(){
    let inputTitleValue=inputTitle.value;
    let inputTaskValue=inputTask.value;

    let selectCatIndex = selectCat.selectedIndex;
    let selectCatText = selectCat.options[selectCatIndex].text;

    let taskArray = [inputTitleValue, inputTaskValue, selectCatText];

    let taskDiv = document.createElement('div');    
    taskDiv.classList.add('col-12','col-sm-6','col-md-4','col-lg-3','task');
    
    if(selectCatText!=='Выберите категорию'){    
        error.textContent=('');  // убираем текст ошибки
        //условие для добавление разных классов для фона по категории
        if (selectCatText==='Дом'){   
            taskDiv.classList.add('home');
        } else if(selectCatText==='Работа'){ 
            taskDiv.classList.add('job');
        }else{
            taskDiv.classList.add('uch');
        }

        for(let i in taskArray){
            let div = document.createElement('div');
            div.classList.add(`taskClass-${i}`);
            div.textContent=taskArray[i];	
            taskDiv.appendChild(div); 
        }     
        content.prepend(taskDiv);   

        // создаем новый option для select удаления
        let newOption = new Option(inputTitleValue, inputTitleValue);
        selectDel.append(newOption);


    } else {
        error.textContent=('⊗ Выберите категорию'); // выводим текст ошибки
    }
}
send.addEventListener('click', task);



/* функция удаления */
function taskDel(){
    let selectDelIndex = selectDel.selectedIndex;
    let SelectDelText = selectDel.options[selectDelIndex].text;

    // Получаем контейнер, где находятся элементы
    let container = document.getElementById('content');
    
    // Идентифицируем элемент, для удаления
    let elementToRemove = Array.from(container.children).find(el => el.textContent.includes(SelectDelText));
    let elementToRemoveSelect = Array.from(selectDel.children).find(el => el.textContent.includes(SelectDelText));
    
    // Проверяем, найден ли элемент, и если да, удаляем его
    if (elementToRemove) {
        container.removeChild(elementToRemove); //удаляем в списке задач
        selectDel.removeChild(elementToRemoveSelect); //удаляем в поле выбора 
    }
        
}    
del.addEventListener('click', taskDel);

