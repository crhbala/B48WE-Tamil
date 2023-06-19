// Do the below programs in IIEF

// A.Print odd numbers in an array
// B.Convert all the strings to title caps in a string array
// C.Sum of all numbers in an array
// D.Return all the prime numbers in an array
// E.Return all the palindromes in an array
// F.Return median of two sorted arrays of the same size.
// G.Remove duplicates from an array
// H.Rotate an array by k times

// A.Print odd numbers in an array
(function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  //B. Convert all the strings to title caps in a string array
  (function(arr) {
    const titleCapsArray = arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCapsArray);
  })(['hello', 'Bala', 'Chandran']);
  
  // C.Sum of all numbers in an array
  (function(arr) {
    const sum = arr.reduce(function(total, num) {
      return total + num;
    }, 0);
    console.log(sum);
  })([1, 2, 3, 4, 5]);
  
  // D.Return all the prime numbers in an array
  (function(arr) {
    const isPrime = function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
  
    const primeNumbers = arr.filter(function(num) {
      return isPrime(num);
    });
    console.log(primeNumbers);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  // E.Return all the palindromes in an array
  (function(arr) {
    const isPalindrome = function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    };
  
    const palindromes = arr.filter(function(str) {
      return isPalindrome(str);
    });
    console.log(palindromes);
  })(['level', 'hello', 'radar', 'arvra','balachandar']);
  
  // F.Return median of two sorted arrays of the same size.
  (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
      return a - b;
    });
  
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
  
    const median = length % 2 === 0 ? (mergedArray[mid - 1] + mergedArray[mid]) / 2 : mergedArray[mid];
    console.log(median);
  })([1, 3, 5], [2, 4, 6]);
  
  // G.Remove duplicates from an array
  (function(arr) {
    const uniqueArray = arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
    console.log(uniqueArray);
  })([1, 2, 2, 3, 4, 4, 5]);
  
  // H.Rotate an array by k times
  (function(arr, k) {
    const rotations = k % arr.length;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArray);
  })([1, 2, 3, 4, 5], 2);
  // Do the below programs in anonymous function

// A.Print odd numbers in an array
// B.Convert all the strings to title caps in a string array
// C.Sum of all numbers in an array
// D.Return all the prime numbers in an array
// E.Return all the palindromes in an array
// F.Return median of two sorted arrays of the same size.
// G.Remove duplicates from an array
// H.Rotate an array by k times

// A.Print odd numbers in an array
const printOddNumbers = function(arr) {
    arr.forEach(function(num) {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  printOddNumbers(array);
  //B. Convert all the strings to title caps in a string array
  const convertToTitleCaps = function(arr) {
    const titleCapsArray = arr.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    return titleCapsArray;
  };
  const array = ['hello', 'Ramesh', 'Kumar'];
  const titleCapsArray = convertToTitleCaps(array);
  console.log(titleCapsArray);
  // C.Sum of all numbers in an array
  const sumArray = function(arr) {
    const sum = arr.reduce(function(total, num) {
      return total + num;
    }, 0);
    return sum;
  };
  const array = [1, 2, 3, 4, 5];
  const arraySum = sumArray(array);
  console.log(arraySum);
  // D.Return all the prime numbers in an array
  const getPrimeNumbers = function(arr) {
    const isPrime = function(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
  
    const primeNumbers = arr.filter(function(num) {
      return isPrime(num);
    });
    return primeNumbers;
  };
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const primeNumbers = getPrimeNumbers(array);
  console.log(primeNumbers);
  // E.Return all the palindromes in an array
  const getPalindromes = function(arr) {
    const isPalindrome = function(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    };
  
    const palindromes = arr.filter(function(str) {
      return isPalindrome(str);
    });
    return palindromes;
  };
  const array = ['level', 'hello', 'radar', 'arvra','balachandar'];
  const palindromes = getPalindromes(array);
  console.log(palindromes);
  // F.Return median of two sorted arrays of the same size.
  const findMedianSortedArrays = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
      return a - b;
    });
  
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[mid];
    }
  };
  
  // Example usage
  const array1 = [1, 3, 5];
  const array2 = [2, 4, 6];
  const median = findMedianSortedArrays(array1, array2);
  console.log(median);
  // G.Remove duplicates from an array
  const removeDuplicates = function(arr) {
    const uniqueArray = arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
    return uniqueArray;
  };
  
  // Example usage
  const array = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(array);
  console.log(uniqueArray);
  // H.Rotate an array by k times
  const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotatedArray;
  };
  
  // Example usage
  const array = [1, 2, 3, 4, 5];
  const rotations = 2;
  const rotatedArray = rotateArray(array, rotations);
  console.log(rotatedArray);
  // Do the below programs in arrow functions.
// A.Print odd numbers in an array
// B.Convert all the strings to title caps in a string array
// D.Sum of all numbers in an array
// E.Return all the prime numbers in an array
// F.Return all the palindromes in an array


// A.Print odd numbers in an array
const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  printOddNumbers(array);
  // B.Convert all the strings to title caps in a string array
  const convertToTitleCaps = (arr) => {
    const titleCapsArray = arr.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    return titleCapsArray;
  };
  const array = ['hello', 'Chris', 'Bala'];
  const titleCapsArray = convertToTitleCaps(array);
  console.log(titleCapsArray);
  // D.Sum of all numbers in an array
  const sumArray = (arr) => {
    const sum = arr.reduce((total, num) => {
      return total + num;
    }, 0);
    return sum;
  };
  const array = [1, 2, 3, 4, 5];
  const arraySum = sumArray(array);
  console.log(arraySum);
  // E.Return all the prime numbers in an array
  const getPrimeNumbers = (arr) => {
    const isPrime = (num) => {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
  
    const primeNumbers = arr.filter((num) => {
      return isPrime(num);
    });
    return primeNumbers;
  };
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const primeNumbers = getPrimeNumbers(array);
  console.log(primeNumbers);
  // F.Return all the palindromes in an array
  const getPalindromes = (arr) => {
    const isPalindrome = (str) => {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    };
  
    const palindromes = arr.filter((str) => {
      return isPalindrome(str);
    });
    return palindromes;
  };

  const array = ['level', 'hello', 'radar', 'arvra','balachandar'];
  const palindromes = getPalindromes(array);
  console.log(palindromes);
  
