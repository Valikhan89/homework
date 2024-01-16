'use strict'


let get=fetch('https://api.slingacademy.com/v1/sample-data/products');

function getProducts(){
    get.then(answer=>answer.json())
    .then((answerJson)=>{

        const row =document.querySelector('.row');

        for(let i=0; i<answerJson.products.length;i++ ){
        
            const col= document.createElement('div');
            col.classList.add('col');
            const card= document.createElement('div');
            card.classList.add('card');
            const img= document.createElement('img');
            img.classList.add('card-img-top');
            img.src =answerJson.products[i].photo_url;   
            const cardBody= document.createElement('div');
            cardBody.classList.add('card-body');
            const h5= document.createElement('h5');
            const parag= document.createElement('p');
            parag.classList.add('card-text');
            h5.classList.add('card-title');
            col.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);
            cardBody.appendChild(h5);  
            cardBody.appendChild (parag);

            h5.textContent=answerJson.products[i].name;   
            parag.textContent=answerJson.products[i].description;

            row.appendChild(col);
        
      }
    })
    .catch(()=> console.log('ошибка'))
    .finally(()=>console.log('Обработано'))

}
getProducts();

