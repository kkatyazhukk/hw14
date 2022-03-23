//Задание 1 - поменять массив в обратном порядке - [1,2,3,4,5,6] -> [6,5,4,3,2,1]

let array1:number[] = [1,2,3,4,5,6];

function reverseArray(x:number[]) {
    return x.reverse();
}
console.log(reverseArray(array1));


// Задание 2 - найти максимальное значение числа в массиве ([3,67,15...])
let array2:number[] = [3,67,15];
function calculateMax(x:number[]) {
   return (x.sort((a:number,b:number) => b - a))[0];
}
console.log(calculateMax(array2));


// Задание 3 - записать в массив ряд фибоначчи начиная с N члена с длинной массива M.
// ряд чисел, в котором каждое последующее число является суммой двух предыдущих:
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 и так далее до бесконечности.
function fibCalculation(arrayLength:number) {
    let fibNumbers = [0, 1];
    for (let i = 1; i <= arrayLength-2; i++) {
        fibNumbers[i+1] = fibNumbers[i] + fibNumbers[i-1];
        }
        return fibNumbers;
    }
    console.log(fibCalculation(9));

// Задание 4 - даны два 4-хзначных числа с неповторяющимися цифрами, надо определить
// сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 ) 

//4.1
let first1:number = 1487;
let firstString1:string = first1.toString();
let second1 = 1487;
let secondString1:string = second1.toString();
let index1:number = 0;
let valueMatch1:number = 0;

for (let i = 0; i < firstString1.length; i++) {
    let result:boolean = firstString1.includes(secondString1[index1]);
    console.log(result);
    index1++;
    if (result === true) {
        valueMatch1++;
    }
}
console.log(`Value match = ${valueMatch1}`);

//4.2
let first2:number = 1487;
let firstString2:string = first2.toString();
let second2:number = 1487;
let secondString2:string = second2.toString();
let index2:number = 0;
let valuePositionMatch2:number = 0;

for (let i = 0; i < firstString2.length; i++) {
    if (firstString2[index2] === secondString2[index2]) {
        valuePositionMatch2++;
    }
    index2++;
}
console.log(`Value & Position match = ${valuePositionMatch2}`);


// Задание 5 - cортировка массива по возрастанию/убыванию
let array5:number[] = [3,67,15, 7,1009,567];

function sortAsc(x:number[]) {
    return (x.sort((a:number,b:number) => a - b));
 }
 console.log(sortAsc(array5));

function sortDesc(x:number[]) {
   return (x.sort((a:number,b:number) => b - a));
}
console.log(sortDesc(array5));


// Задание 6 - удалить из массива все повторяющиеся элементы 
let array:number[] = [1,6,4,3,3,7,1];
let newArray = array.filter(function(element:number, index:number) {
    return array.indexOf(element) == index;
});
console.log(newArray);