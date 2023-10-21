// (Complete) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxofTwoNumbersthat(num1, num2){
    if (num1 >= num2){
        return num1
    }
    else{
        return num2
    }
}

console.log(maxofTwoNumbersthat(2,4))

// (Complete) Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
function maxofThreethat(num1,num2,num3){
    if(num1 >= num2 && num1 >= num3){
        return num1
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2
    }
    else{
        return num3
    }
}

console.log(maxofThreethat(3,2,1))


// (Complete) Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(input){ad
    if(input.length == 1){
        if(input == "A" || input == "a" || input == "E" || input == "e" || input == "I" || input == "i" || input == "O" || input == "o" || input == "U" || input == "u"){
            return "True"
        }
        else{
            return "False"
        }
    }
    else {
        return "False"
    }
}

console.log(isCharAVowel('Ao'))


// (Complete) Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
const input = [1,7,3]

function sumArraythat(input){
    let sum = 0
    for(i = 0; i < input.length; i++){
        sum += input[i]
    }
    return sum
}

console.log(sumArraythat(input))

// (Complete) Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
const input2 = [1,7,3,4]

function multiplyArraythat(input2){
    let sum = 1
    for(i = 0; i < input2.length; i++){
        sum *= input2[i]
    }
    return sum
}

console.log(multiplyArraythat(input2))


// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.


// (Complete) Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
function reverseStringthat(input){
    const charArray = input.split("")
    const revCharArray = []
    for (i = charArray.length - 1; i >= 0; i--){
    revCharArray.push(charArray[i])
    }
    let output = revCharArray.join("")
    return output
}

console.log(reverseStringthat('Tap'))

// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
const sports = ['Soccer', 'Football', 'Hockey', 'Baseball', 'Volleyball']

function longestStringInArraythat(sports){
    let longest = 0
    for(i = 0; i < sports.length; i++){
        if(sports[i].length > longest) {
            longest = sports[i].length
        }  
    }
    return longest
}

console.log(longestStringInArraythat(sports))


// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].