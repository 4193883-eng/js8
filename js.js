funcArray = [1,2,3,4,5,6,7,8,9,10,23,32,1523,2445,21434535,1242344536,3234214]
//Создать массив с числами, вывести на экран все числа которые больше 10
function moreThan(array, obj){
    let result  = []
    for(let i = 0; i < array.length; i ++){
        if (array[i] > obj){
            result.push(array[i])
        }
    }
    return result
}
console.log(moreThan(funcArray, 10))

//**Создать массив с числами, найти самое большое число при помощи цикла
function findBiggest(array){
    let lastBiggest = 0
    for(let i = 0; i < array.length; i ++){
        if (array[i] > lastBiggest){
            lastBiggest = array[i]
        }
    }
    return lastBiggest
}
console.log(findBiggest(funcArray))