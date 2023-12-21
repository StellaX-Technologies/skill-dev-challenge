// Updated the array prototype with a method called last
Array.prototype.last = function() {
    let index = this.length - 1;
    if(this.length !== 0) {
        return this[index];
    }
    return -1;
}

/*Test 1*/
let array1 = [5,6,7];
console.log(array1.last());

/*Test 2*/
let array2 = ["hello", "world"];
console.log(array2.last());

/*Test 3*/
let array3 = [];
console.log(array3.last());