let numbers = []
let number;
do {
    number = prompt('Enter the number: ');
    numbers.push(number);
} while (number != 0);
numbers.sort(function(a, b){return b-a});
console.log(numbers)