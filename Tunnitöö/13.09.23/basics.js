let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findMyIndex(numberArray, 3));
//console.log(addNumbers2(2)(4));
//console.log(newArray)
//console.log({numberArray, filterArray})

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

const filterArray = numberArray.filter(num => num < 4)

const names = ['Juku', 'Mari', 'Jüri', 'Jaana']

/*const dataa = name.map(name => {
    return {
        name: "name1",
        age: 123,
        email: "afafaf@company.com",
        address: 
    }
})*/

const data = names.map(names => {
    return {
        name: names,
        age: names.length + 20,
        email: names.toLowerCase() + "@company.com",
        address: `${names} Street`,
        username: names.split("").reverse().join(""),

    }
})

const newJuku = {
    ...data[0],
    height: 175
}

const evenNewerJuku = {
    ...newJuku,
    age: 99
}
console.log(data)
console.log(newJuku)
console.log(evenNewerJuku)