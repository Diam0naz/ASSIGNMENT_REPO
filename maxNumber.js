let arry1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 50, 20, 22, 24, 26, 28, 30, 2, 1];

function minNum(arr) {
    let min = arr[0];
  
    for (let i = 0; i < arry1.length; i++) {
      if (min > arry1[i]) {
        min = arry1[i];
      }
    }
    console.log(min);
  }
  
  minNum(arry1);

  function maxNum(arr) {
    let max = arr[0];
  
    for (let i = 0; i < arry1.length; i++) {
      if (max < arry1[i]) {
        max = arry1[i];
      }
    }
    console.log(max);
  }
  
  maxNum(arry1);