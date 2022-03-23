function askName(){
    var name = prompt('what is your name?')
    return name
}
function askTemp(){
    var temp = prompt('what is the temperature?')
    return temp
}
function askDegree(){
    var degree = prompt('Will we be starting in Celsius or Farenheit today? (C or F)')
    return degree
}
function convertToF(){
    var ctof = Number(askTemp());
    ctof = ctof * 1.8;
    ctof = ctof + 32
    alert(`In Farenheit the temperature is ${ctof}`)
    return ctof
}
function convertToC(t){
    var ftoc = Number(askTemp());
    ftoc = ftoc - 32
    ftoc = ftoc / 1.8;
    alert(`In Celsius the temperature is ${ftoc}`)
    return ftoc
}
function decider(templetter){
    if (templetter == "C" || templetter == "c"){
        console.log(convertToF())
    }else if (templetter == "F" || templetter == "f"){
        console.log(convertToC())
    }else{
        alert(`Sorry as of right not I can only do Farenheit and Celsius but in the future I have aspirations to convert more.`)
    }
}

function program() {
    alert(`Hello ${askName()}, welcome to my temperature converter.`)
    let deg = askDegree();
    decider(deg)
    var tryAgain = prompt("Do you want to do another conversion? Press 1 for yes.")
    if (tryAgain == "1") {
        program()
    }
}

program()




// function r() {
//     var x = Math.floor(Math.random() * 10) + 1
//     return x
// }

// var rN = r()

