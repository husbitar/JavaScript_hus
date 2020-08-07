const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
finalParticipants.forEach(member => {
  console.log( member + ' joined the contest.');
})
console.log(announcements);



let newString = 'abc12345#444$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
