function askName(){
    var name = prompt('what is your name?')
    return name
}
console.log(askName)

alert(`Hello ${askName()}, welcome to my temperature converter.`)

function askTemp(){
    var temp = prompt('what is the temperature?')
    return temp
}

console.log(askTemp)
function askDegree(){
    var degree = prompt('Is that in Celsius or Farenheit? (C or F)')
    console.log(degree)
    return degree
}

askTemp()
askDegree() 

if (askDegree = 'C'){
    askTemp = askTemp * 1.8 
    askTemp = askTemp + 32
}