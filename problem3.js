const isPrime = (num) => {
  for (let i=0; i<num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}


function largestPrimeFactor(number) {
  let result = 0;

  for (let i=0; i <number; i++) {
    if (isPrime(i)) result = i;
  }
  
  return result;
}

console.log(largestPrimeFactor(13195));
