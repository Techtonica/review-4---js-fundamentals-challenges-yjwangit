// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

let arr = [1,2,3,4,5,6,7,8,9,90];
return arr[0];
return arr[arr.length-1];
arr.push(100);
arr.unshift(["apple",88,"fish"]);
return arr[0][0];
