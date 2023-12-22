function getLastElement(arr){
    return arr.length >0 ? arr[arr.length -1] : -1;
}

const jsonString='[2,1,5,4,3]'
const myArray=JSON.parse(jsonString)

const lastElement = getLastElement(myArray);
console.log(lastElement)

// console.log('solution')