const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
finalParticipants.forEach(member => {
  console.log( member + ' joined the contest.');
})
console.log(announcements);


function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
let newString = 'abc12345#444$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);
let mobile = {
  brand: 'Samsung',
  model: 'Galaxy Note 9'
};

for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
const {possiblePermutations, largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(largestCube); // '1974'
//console.log(largestCube);
const activity = 'Surfing';
const beach = { activity,activity1:12,activity2:'?activity' };
console.log(beach);
