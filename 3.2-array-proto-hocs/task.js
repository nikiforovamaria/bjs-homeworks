function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((num, i) => num === arr2[i]);
}

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
console.log(compareArrays([1, 2, 3], [2, 3, 1])); 
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memorize(fn, limit = 10) {
  const memory = [];
    
  return function(...args) {
    const inMemory = memory.find(item => compareArrays(args, item.args));
    if (inMemory) {
      return inMemory.result;
    } else {
      const fn1 = () => fn(...args);
      memory.push({args: args, result: fn1()});
      if (memory.length > limit) {
        memory.shift();
      }
      return fn1();
    }
  }
}

const mSum = memorize(sum, 5);
console.log(sum(3, 4));
console.log(mSum(3, 4));
//{ args: [3, 4], result: 7 }

function testCase(testFunction, time) {
  const arr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time(time);
  for (let i = 0; i < 10; i++) {
    arr.forEach(item => testFunction(...item));
  }
  console.timeEnd(time);
}

console.log(testCase(sum, 'sum'));
//sum: 5049.229248046875 ms
console.log(testCase(mSum, 'mSum'));
//mSum: 605.64501953125 ms

//альтернативный вариант решения

/*function memorize() {
  return () => {};
}
const resultFunction = memorize();
resultFunction();

function memorize() {
  return (a, b, c, d) => console.log(a, b, c, d);
}
const resultFunction = memorize();
resultFunction(1,2,3,4);

function memorize(fn) {
  const fn1 = () => fn;
  return fn1();
}
const resultFunction = memorize(a => a ** 2);
resultFunction(2);
resultFunction(5); 

function memorize(fn, limit = 10) {
  const memory = [
    {
      args: [3, 4],
      result: 7
    },
    {
      args: [1, 3],
      result: 4
    }
  ];
  if (memory.length > limit) {
    memory.shift();
  }
  if (memory.some(compareArrays(fn(...args), memory.args))) {
    return console.log(`результат из памяти ${memory.result}`);
  } else {
    const fn1 = () => fn;
    memory.push({args: [fn(...args)], result: fn1()});
    return console.log(`результат не из памяти ${fn1()}`);
  }
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((num, i) => num === arr2[i]);
}*/