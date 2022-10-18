// const sortNumbers = (array, type)=>{
//     return array.sort((a,b)=> type === 'asc' ? a - b : b - a);
// }
//
// const random_numbers = [13, 467, 2, 9, 1, 4321]
// console.log(sortNumbers(random_numbers, 'asc'))

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
//
//     return array.sort((digit_a, digit_b)=>{
//
//         const sum_a = [...'' + digit_a].reduce((sum,val)=>sum+= +val, 0)
//         console.log(sum_a)
//
//         const sum_b = [...'' + digit_b].reduce((sum,val)=>sum+= +val, 0)
//         console.log(sum_b)
//
//         return (sum_a > sum_b) ? 1 : -1
//     })
// }
//
// const random_numbers = [13, 467, 2, 9, 1, 4321]
// console.log(sortBySumOfDigit(random_numbers))   // [1, 2, 13, 4321, 467]


// const shuffle = (array)=>{
//     array.sort(function(a, b) {
//         return Math.random() - 0.5
//     });
// }
//
// let random_numbers = [13, 467, 2, 9, 1, 4321]
// shuffle(random_numbers)
// console.log(random_numbers)

// const STATUSES = {
//     ONLINE: 'online',
//     OFFLINE: 'offline'
// };
// const users = [{
//     name: 'aleksey',
//     status: STATUSES.ONLINE
// }, {
//     name: 'bogdan',
//     status: STATUSES.ONLINE
// }, {
//     name: 'nadia',
//     status: STATUSES.OFFLINE
// }];
//
// const getUsersStatuses = (obj) =>{
//     const online = obj.reduce((count, obj)=>{
//         if(obj.status==STATUSES.ONLINE)  count += 1
//         return count
//     }, 0)
//     return {usersOnline: online, usersOffline: obj.length - online}
// }
//
// console.log(getUsersStatuses(users)); // { usersOnline: 2, usersOffline: 1 }
