
//1. Створити пустий масив та :
//    a. заповнити його 50 парними числами за допомоги циклу.

let arr = [];
for (let i = 2; i <= 100; i += 2) {
    arr.push(i);
}
console.log(arr);

//    b. заповнити його 50 непарними числами за допомоги циклу.

let arr = [];
for (let i = 1; i <= 100; i += 2) {
    arr.push(i);
}
console.log(arr);

//    c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr = [];
while(arr.length < 20){
    let r = Math.floor(Math.random() * 100);
    arr.push(r);
}
console.log(arr);

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr = [];
while(arr.length < 20){
    let r = Math.floor(Math.random() * 1000);
    if (r > 8 && r < 732) arr.push(r);
}
console.log(arr);

//2. Вивести за допомогою console.log кожен третій елемент

let arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < arr.length; i += 2) {
    if (i !==0) console.log(arr[i]);
}

//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

let arr = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
for (let i = 0; i < arr.length; i += 2) {
    if (i !==0 && arr[i] % 2 === 0) console.log(arr[i]);
}

//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arr1 = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
let arr2 = [];
for (let i = 0; i < arr1.length; i += 2) {
    if (i !==0 && arr1[i] % 2 === 0) {
        console.log(arr1[i]);
        arr2.push(arr1[i])
    }
}
console.log(arr2);

//5. Вивести кожен елемент масиву, сусід справа якого є парним
//EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log(arr[i]);
    }
}

//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arr = [100,250,50,168,120,345,188];
let average = 0;
if (arr.length > 0) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
}
console.log(average);

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr = [];
let arr5= [];
while(arr.length < 20){
    let r = Math.floor(Math.random() * 100);
    arr.push(r);
    arr5.push(r * 5);
}
console.log(arr);
console.log(arr5);

//8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let strArray = ['Lorem', 'ipsum', 'dolor', 'sit', true, false, 14, true, 19, 101];
let numArray = [];
for (i = 0; i < strArray.length; i++) {
    if (typeof strArray[i] === 'number') {
        numArray.push(strArray[i]);
    }
}
console.log(numArray);

//- Дано 2 масиви з рівною кількістю об'єктів.
//Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//    Записати цей об'єкт в новий масив
//Example:
//    let usersWithCities = [
//            {
//                id: 1, // <===
//                name: 'vasya',
//                age: 31,
//                status: false,
//                address: {
//                    user_id: 1, // <===
//                    country: 'Ukraine',
//                    city: 'Ternopil'
//                }
//            },
// TO BE CONTINUED .....
//        ]

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    for (const city of citiesWithId) {
        if (city.user_id === user.id) {
            user.address = city;
            usersWithCities.push(usersWithId[i]);
        }
    }
}
console.log(usersWithCities);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) console.log(arr1[i]);
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
}
console.log(arr2);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let str = "";
for (i = 0; i < arr.length; i++) {
    str = str + arr[i];
}
console.log(str);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let str = "";
let i = 0;
while (i < arr.length){
    str = str + arr[i];
    i++;
};
console.log(str);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr = [ 'a', 'b', 'c'];
let str = "";
for (const string of arr) {
    str = str + string;
}
console.log(str);

