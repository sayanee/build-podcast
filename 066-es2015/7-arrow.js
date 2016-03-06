const arr = [1, 2, 3];

// 0 / 1 / 2 params
const hello = arr.map(() => console.log('Hi there!'));
const fivetimes = arr.map((x) => console.log(5 * x));
const double = a => a * 2;
arr.forEach((a, i) => console.log(`I have ${a} balls at position ${i}`))
