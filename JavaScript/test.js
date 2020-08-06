const eatFruit = (fruit = 'apple') => {
  console.log(`This ${fruit} is delicious!`);
};
eatFruit();

const input = 'a whale of a deal!';
const vowels = ['a','e','i','o','u'];
const resultArray = [];

for (let i = 0; i < input.length;i++) {
  //console.log(i,input[i]);
  if (input[i]==='e'|| input[i]==='u'){
    resultArray.push(input[i]);
  }
for (let x = 0;x < vowels.length;++x){
   console.log(i,input[i],x);
  if (input[i]=== vowels[x]){
    resultArray.push(input[i]);
    x = vowels.length;
  }
}
}
console.log(resultArray.join('').toUpperCase());
