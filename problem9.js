const letsIterate = (n) => {
  let i = 1;
  let sum = 1;
  while (sum <= n) {
    let c = i*i + (i+span) * (i+span);
    c = Math.sqrt(c);
    sum = i + i+span + c;
    product = i * (i+span) * c;
    if (sum === n) {
      state = true;
      break;
    }
    i++;
    
  }
  return false;
}

  let span = 1;
  let state = false;
  let product = 1;

function specialPythagoreanTriplet(n) {
  //condition: a < b < c
  //result must be a + b + c ===  n
  //c must not be bigger than n
  let firstRound = letsIterate(n);
  while (state === false) {
    if (state === false) {
    span++;
    letsIterate(n);
  }
  }
  let memory = product;
  product = 1;
  span = 1;
  state = false;
  return memory;

}

console.log(specialPythagoreanTriplet(24));
