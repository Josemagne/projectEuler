const factor = (n) => {
  let container = [];
  for (let i=0; i<n; i++) {
    container.push(9);
  }
  return container.join('');
  
}

const readsBoth = (num) => {
  let stringNum = num.toString();
    console.log(stringNum);
  
  if (num.toString()[num.toString.length -1] === 0) return false;
  else {
    let number = num.toString();
  let way1 = [];
  let way2 = [];

  for (let i=0; i<number.length; i++) {
    way1.push(number[i]);
  }

  for (let i=number.length; i>=0; i--) {
    way2.push(number[i]);
  }
  console.log(way1.join(''), way2.join(''))
  if (way1.join('') === way2.join('')) return true;
  else return false;
  }
  
}


function largestPalindromeProduct(n) {
  let factor1 = factor(n);
  let factor2 = factor(n);
  //create the factors
  for (let i=factor1; i > 0; i--) {
    for (let j=factor2; j > 0; j--) {
      let product = i * j;
      if (readsBoth(product)) return product;
    }
  }

}

console.log(largestPalindromeProduct(3));

//start from the greatest factors