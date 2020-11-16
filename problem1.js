function multiplesOf3and5(number) {

  let container = []; //container to store values

  for ( let i=0; i < number; i++ ) { //go through every value
    if (i % 3 === 0 || i % 5 === 0) {
      container.push(i);
    }
  }

  let result = 0;

  for (const elem in container) {
    result += elem;
  }

  return elem;

}

multiplesOf3and5(1000);
