
//--створити масив з:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//- та вивести його в консоль

let num = [12, 16, 19, 21, 25];
console.log(num);
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);
let string = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
console.log(string);
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);
console.log(string[4]);
let mix = [true, false, 31, 41, 'ipsum'];
console.log(mix);
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);
console.log(mix[4]);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let text = [];
text[0] = 'Lorem';
text[1] = 'ipsum';
text[2] = 'dolor';
text[3] = 'sit';
text[4] = 'amet';
console.log(text);
document.write(text);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>`);
}

for (let i = 1; i < 11; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit № ${i}</div>`);
}

let i = 0;
while (i < 20) {
    document.write(`<h1>Lorem ipsum</h1>`);
    i++;
}

let i = 1;
while (i < 21) {
    document.write(`<h1>Lorem ipsum № ${i}</h1>`);
    i++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArray = ['6', '11', '13', '16', '19', '25', '31', '41', '49', '75'];
for (i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do'];
for (i = 0; i < strArray.length; i++) {
    console.log(strArray[i])
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let mixArray = ['Lorem', 'ipsum', 'dolor', 'sit', true, false, 14, true, 19, 101];
for (i = 0; i < mixArray.length; i++) {
    console.log(mixArray[i])
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let bulArray = ['Lorem', 'ipsum', 'dolor', 'sit', true, false, 14, true, 19, 101];
for (i = 0; i < bulArray.length; i++) {
    if (typeof bulArray[i] === 'boolean') {
        console.log(bulArray[i]);
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let numArray = ['Lorem', 'ipsum', 'dolor', 'sit', true, false, 14, true, 19, 101];
for (i = 0; i < numArray.length; i++) {
    if (typeof numArray[i] === 'number') {
        console.log(numArray[i]);
    }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let strArray = ['Lorem', 'ipsum', 'dolor', 'sit', true, false, 14, true, 19, 101];
for (i = 0; i < strArray.length; i++) {
    if (typeof strArray[i] === 'string') {
        console.log(strArray[i]);
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let freshArray = [];
freshArray[0] = 'Lorem';
freshArray[1] = 'ipsum';
freshArray[2] = 'dolor';
freshArray[3] = 'sit';
freshArray[4] = true;
freshArray[5] = false;
freshArray[6] = 14;
freshArray[7] = true;
freshArray[8] = 19;
freshArray[9] = 101;
for (let i = 0; i < freshArray.length; i++) {
    console.log(freshArray[i]);
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 11; i++) {
    console.log('поточний номер кроку - ' + i + ' ');
    document.write('поточний номер кроку - ' + i + ' ');
}


//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 101; i++) {
    console.log('поточний номер кроку - ' + i + ' ');
    document.write('поточний номер кроку - ' + i + ' ');
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i < 101; i += 2) {
    console.log('поточний номер кроку - ' + i + ' ');
    document.write('поточний номер кроку - ' + i + ' ');
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log('поточний номер кроку - ' + i + ' ');
        document.write('поточний номер кроку - ' + i + ' ');
    }
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 1; i < 101; i++) {
    if (i % 2 === 1) {
        console.log('поточний номер кроку - ' + i + ' ');
        document.write('поточний номер кроку - ' + i + ' ');
    }
}
