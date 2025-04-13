let arrayOne = [5, 2, 4, 1, 3];
let arrayTwo = [7, 9, 8, 6, 10];

function sortArray(arry1, arry2, sortOrder) {
  let combineArry = [];
  let swapped;
  sortOrder = sortOrder.toUpperCase()
  // Combine arrays (use for-of instead of for-in for arrays)
  for (let num of arry1) combineArry.push(num);
  for (let num of arry2) combineArry.push(num);

  if (sortOrder === "ASC") {
    for (let i = 0; i < combineArry.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < combineArry.length - i - 1; j++) {
          if (combineArry[j] > combineArry[j + 1]) { // Sorts in descending order
            [combineArry[j], combineArry[j + 1]] = [combineArry[j + 1], combineArry[j]];
            swapped = true;
          }
        }
        if (!swapped) break;
      }
  } else if (sortOrder === "DESC") {
    for (let i = 0; i < combineArry.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < combineArry.length - i - 1; j++) {
          if (combineArry[j] < combineArry[j + 1]) { // Sorts in descending order
            [combineArry[j], combineArry[j + 1]] = [combineArry[j + 1], combineArry[j]];
            swapped = true;
          }
        }
        if (!swapped) break;
      }
  } else {
    console.log(`${sortOrder} is not a Valid Order`)
    return
  }


  


  console.log(combineArry); // Add this to print the result!
}

sortArray(arrayOne, arrayTwo, "asc"); // Output: [10,9,8,7,6,5,4,3,2,1]