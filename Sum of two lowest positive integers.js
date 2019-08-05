function sumTwoSmallestNumbers(numbers) {  
    newnum = numbers.sort(function (a, b) {  return a - b;  });
    return newnum[0] + newnum[1]
 }