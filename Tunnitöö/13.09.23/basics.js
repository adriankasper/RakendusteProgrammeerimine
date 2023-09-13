let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findMyIndex(numberArray, 3));
console.log(addNumbers2(2)(4));
console.log(newArray)


function findMyIndex(array, element){
    return array.indexOf(element);
}

function addNumbers(num1, num2){
    return num1 + num2;
}

const arrowFunction = (n1, n2) => {
    return n1 +n2;
}

const addNumbers2 = (num1,num2) => {
    return function addNumbersHelper(num2){
        return num1+num2;
    }
}

const nameString = (name) => `hello ${name}`

const newArray = numberArray.map((element, index, array) => {return element + 5})

const filterArray = numberArray.filter()