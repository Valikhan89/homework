'use strict'


function showProduct(products){
    const row = document.querySelector('.row');
    products.map((product)=>{
        //создание элементов дом
        const col= document.createElement('div');
        col.classList.add('col');

        const card= document.createElement('div');
        card.classList.add('card','h-100');

        const img= document.createElement('img');
        img.classList.add('card-img-top');

        const cardBody= document.createElement('div');
        cardBody.classList.add('card-body');

        const cardfooter= document.createElement('div');
        cardfooter.classList.add('card-footer');

        const h5= document.createElement('h5');
        h5.classList.add('card-title');

        const parag= document.createElement('p');
        parag.classList.add('card-text');

        const price= document.createElement('div');
        price.classList.add('text-danger');

        // иерархия элементов
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(cardfooter);
        cardBody.appendChild(h5);  
        cardBody.appendChild(price);
        cardBody.appendChild (parag);
        row.appendChild(col);

        // вставка данных
        img.src =product.images[0];   
        price.textContent=`${product.price} USD`;
        h5.textContent=product.title;  
        parag.textContent=product.description;
        cardfooter.textContent=`Категория: ${product.category}`;


    });
};


async function getProducts(){
    try{
        const get = await fetch('https://dummyjson.com/products');
        const getJson = await get.json();
        
        showProduct(getJson.products);

    } catch(err) {
        document.body.textContent=`Ошибка: ${err}`;
    }
}

getProducts();

