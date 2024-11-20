log = console.log;

// accepted
function maximumNumber(n1, n2) {
  return n1 >= n2 ? n1 : n2;
}
// log(maximumNumber(5, 5));

// accepted
function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "Fizz Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else {
    return n;
  }
}
// log(fizzBuzz(3));

// accepted
function printNumbersOfArray(arr, odd = false) {
  if (!odd) {
    log("printing even nubmers");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        log(arr[i]);
      }
    }
    return;
  }

  log("Printing odd numbers");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      log(arr[i]);
    }
  }
  return;
}

// printNumbersOfArray([2, 6, 5, 5, 5, 8, 9, 10, 12, 9, 4, 4, 44, 2]);
// log("-------------------------------------------------------------------");
// printNumbersOfArray([2, 6, 5, 5, 5, 8, 9, 10, 12, 9, 4, 4, 44, 2], true);
