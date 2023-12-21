Array.last = function() {
    if (this.length === 0) {
      return -1;
    } else {
      return this[this.length - 1];
    }
  };
  
  // Function to get an array from user input
function getUserArray() {
    const input = prompt("Enter elements of the array separated by commas (e.g., 1,2,3):");
    if (input === null) {
      return [];
    }
    const userArray = input.split(",").map(item => Number(item.trim()));
    userArray.last = Array.last;
    return userArray;
};
  
const userArray = getUserArray();
console.log("User's Array:", userArray);
console.log("Last Element:", userArray.last());