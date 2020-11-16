// fiboEvenSum(10) should return 10.

function fiboEvenSum(n) {

  let result = 0; //sum of the even numbers
  let container = [1, 2];
  //fibonacci num generator
  while (container[container.length-1] < n) {
    console.log(container);
    let nextNumber = container[container.length-1] + container[container.length-2];
    if (nextNumber % 2 === 0) result += nextNumber;
    container.push(nextNumber);
    console.log(container);
  }
  
  return result + 2;
}

console.log(fiboEvenSum(1000));
