"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

let generatedArray = [];
for (let i = 0; i < 5; i++) {
  generatedArray.push(Math.floor(Math.random() * 10)); 
}

console.log("Сгенерированный массив:", generatedArray);


const sum = generatedArray.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма элементов массива:", sum);


const min = Math.min(...generatedArray);
console.log("Минимальное значение в массиве:", min);



const indexesOfThree = [];
generatedArray.forEach((element, index) => {
  if (element === 3) {
    indexesOfThree.push(index);
  }
});
console.log("Индексы элементов со значением 3:", indexesOfThree);
