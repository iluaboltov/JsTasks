//1

const isString = input => typeof input === "string"

console.log(isString(["fsd"]), isString("fsd"))

//2
const isEmpty = input => !input.trim().length

console.log(isEmpty("   "), isEmpty("fdf"))

//3
const sliceStrng = (input)=>{
    return input.split(" ")         //Не знаю, в тз не було вказано деталь, то я зробив максимально простий
}
console.log(sliceStrng("Robin Singh"))

//4
const deleteLetters = (input, num)=>{
    return input.slice(0, num)
}
console.log(deleteLetters("Robin Singh",4))

//5
const abbrevName = (input)=>{
    const arr = input.split(" ")
    return arr[0] + " " + arr[1].slice(0, 1)
}
console.log(abbrevName("Robin Singh"))

//6
const emailProtection = (input) =>{
    let protectedEmail = "";
    let accessToBlur = false;

    for(let letter of input){
        if(letter === "_" || letter === "."){
            accessToBlur = true;
        }
        if(letter === "@"){
            accessToBlur = false
        }
        if(accessToBlur){
            protectedEmail += "*"
            continue;
        }
        protectedEmail += letter
    }
    return protectedEmail
}
console.log(emailProtection("robin.singh@example.com"))

//7
const strToParametr = (input)=>{
    return input.replaceAll(" ", "-").toLowerCase()
}
console.log(strToParametr("Robin Singh from USA"))

//8
const capitalize = (input)=>{
    return input[0].toUpperCase() + input.slice(1)
}
console.log(capitalize("js string exercises"))

//9
const capitilizeEveryWord = string =>
    string
        .split(" ")
        .map(capitalize)
        .join(" ");
console.log(capitilizeEveryWord("js string exercises"))

//10
const swapcase = (input)=>{
    let result = "";
    for(let char of input){
        if(char.toUpperCase() == char){
            result += char.toLowerCase()
            continue;
        }
        if(char.toLowerCase() == char){
            result += char.toUpperCase()
            continue;
        }
        result += char
    }
    return result
}
console.log(swapcase("AaBbc"))

//11
// const camelize = ()=>{
//     return str.replace(/\W+(.)/g, (match, chr)=>
//     {
//         return chr.toUpperCase();
//     });
// }
// console.log(camelize("JavaScript Exercises"))