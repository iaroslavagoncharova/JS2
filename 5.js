let kohde = document.querySelector('#kohde')
let numbers = []
let number;
for (let i = 0; i<= numbers.length; i++) {
    number = prompt('Enter the number: ')
    if (numbers.includes(number)) {
        kohde.innerHTML = "The number already exists";
        numbers.sort(function (a, b) {return a-b})
        console.log(numbers)
    }
    else {
        numbers.push(number)
    }
}









