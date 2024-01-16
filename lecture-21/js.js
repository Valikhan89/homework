'use strict'


const peopleArray = [
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        age: 30,
        gender: 'Мужской',
        hobbies: ['Чтение', 'Путешествия', 'Спорт'],
        address: {
          city: 'Астана',
          street: 'Главная',
          zipCode: '100000'
        }
    },
    {
        firstName: 'Ирина',
        lastName: 'Петровна',
        age: 25,
        gender: 'Женский',
        hobbies: ['Искусство', 'Музыка', 'Плавание'],
        address: {
          city: 'Алматы',
          street: 'Вторая',
          zipCode: '120000'
        }
    }
];

// ищем женщин
const woman = peopleArray.filter(person => person.gender==='Женский');
console.log(woman);


// массив с именами
const fullNames = peopleArray.map(person => `${person.firstName} ${person.lastName}`);
console.log( fullNames);


// вычисления среднего возраста
const totalAge = peopleArray.reduce((accumulator, person) => accumulator + person.age, 0);
const averageAge = totalAge / peopleArray.length;
console.log(averageAge);


// сортировки по возрасту (от младшего к старшему)
const sortedByAge = peopleArray.slice().sort((a, b) => a.age - b.age);
console.log(sortedByAge);



