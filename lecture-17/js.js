'use strict'


// Объект корзины
const shoppingCart = {
    items: [],
  
    // Добавление товара в корзину
    addItem: function (itemName, quantity, price) {
      this.items.push({ name: itemName, quantity: quantity, price: price });
      this.displayCart();
    },
  
    // Отображение содержимого корзины
    displayCart: function () {
      const cartItemsElement = document.getElementById('cartItems');
      cartItemsElement.innerHTML = ''; // Очищаем текущее содержимое
  
      this.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.quantity}x ${item.name} - ₸${item.price}`;
        cartItemsElement.appendChild(listItem);
      });
  
      const totalPriceElement = document.getElementById('totalPrice');
      totalPriceElement.textContent = `Общая стоимость: ₸${this.calculateTotalPrice()}`;
    },
  
    // Вычисление общей стоимости корзины
    calculateTotalPrice: function () {
      return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  };
  


  // Функция добавления товара в корзину
  function addToCart() {
    const itemName = 'Товар'; 
    const quantityInput = document.getElementById('quantityInput');
    const priceInput = document.getElementById('priceInput');
  
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(priceInput.value);
  
    // Проверяем, что введено корректное количество и цена товара
    if (!isNaN(quantity) && quantity > 0 && !isNaN(price) && price > 0) {
      shoppingCart.addItem(itemName, quantity, price);
    } else {
      alert('Пожалуйста, введите корректное количество и цену товара.');
    }
  
    // Очищаем поля ввода
    quantityInput.value = 1;
    priceInput.value = 10;
  }
  button.addEventListener('click',addToCart);
  
