//1

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())
const isString = (input)=>{
    return typeof(input) === "string" ? true : false
}
console.log(isString(["fsd"]), isString("fsd"))

//2
const isEmpty = (input)=>{
    return input.trim().length > 0 ? true : false
}
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
        if(letter === "_"){
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
console.log(emailProtection("robin_singh@example.com"))

//7
const strToParametr = (input)=>{
    let array = input.split(" ")
    array.map((char, index)=>{array[index] = char.toLowerCase()})
    return array.join("-")
}
console.log(strToParametr("Robin Singh from USA."))

//8
const capitalize = (input)=>{
    return input[0].toUpperCase() + input.slice(1)
}
console.log(capitalize("js string exercises"))

//9
const capitilizeEveryWord = (input)=>{
    let array = input.split(" ")
    array.map((element, index)=>{
        array[index] = element[0].toUpperCase() + element.slice(1)
    })
    return array.join(" ")
}
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
const camelize = ()=>{
    return str.replace(/\W+(.)/g, (match, chr)=>
    {
        return chr.toUpperCase();
    });
}
console.log(camelize("JavaScript Exercises"))