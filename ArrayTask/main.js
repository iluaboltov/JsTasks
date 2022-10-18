// const sortNumbers = (array, type)=>{
//     switch (type) {
//         case "asc":
//             return array.sort((a,b)=> a-b)
//         case "desc":
//             return array.sort((a,b)=> b-a)
//     }
// }
//
// const random_numbers = [13, 467, 2, 9, 1, 4321]
// console.log(sortNumbers(random_numbers, 'desc'))

// const sortNames = (array, type)=>{
//     switch (type) {
//         case "asc":
//             return array.sort((a,b)=> a.localeCompare(b))
//         case "desc":
//             return array.sort((a,b)=> b.localeCompare(a))
//     }
// }
//
// const names = ['алексей', 'богдан', 'надя', 'геалекс', 'лаврентий', 'федя', 'сеня']
// console.log(sortNames(names, 'desc'))

// const sortBySumOfDigit= (array)=>{
//     return array.sort((digit_a, digit_b)=>{
//
//         let sum_a = 0,
//             sum_b = 0;
//
//         for (const digit of String(digit_a)){
//             sum_a += +digit
//         }
//         console.log(sum_a)
//         for (const digit of String(digit_b)){
//             sum_b += +digit
//         }
//         console.log(sum_b)
//         return (sum_a > sum_b) ? (sum_a == sum_b)?  0 :  1 : -1 // if a < b => return -1, otherwise check if a != b => return 1(false), or 0(true)
//     })
// }
//
// const random_numbers = [13, 467, 2, 9, 1, 4321]
// console.log(sortBySumOfDigit(random_numbers))   // [1, 2, 13, 4321, 467]


// const shuffle = (array)=>{
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
//
// let random_numbers = [13, 467, 2, 9, 1, 4321]
// shuffle(random_numbers)
// console.log(random_numbers)

const STATUSES = {
    ONLINE: 'online',
    OFFLINE: 'offline'
};
const users = [{
    name: 'aleksey',
    status: STATUSES.ONLINE
}, {
    name: 'bogdan',
    status: STATUSES.ONLINE
}, {
    name: 'nadia',
    status: STATUSES.OFFLINE
}];

const getUsersStatuses = (obj) =>{
    let num_online = 0;
    users.forEach((user)=>{
        if (user.status == STATUSES.ONLINE) num_online++;
    })
    return {
        usersOnline: num_online,
        usersOffline: obj.length - num_online,
    }
}

console.log(getUsersStatuses(users)); // { usersOnline: 2, usersOffline: 1 }

