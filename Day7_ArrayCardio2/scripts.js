const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Some checks if at least one thing in your array meets what you are looking for
// Array.prototype.some() // is at least one person 19 or older?

//we coudl hardcode the year (if 2018 - person.year >= 19...), but it is best to not hard code dates for scalability. 
// const isAdult = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19) {
//     return true;
//   }
// });
// console.log({isAdult});

//shorthand / implicit return:
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({isAdult});


// Every checks if all the things in yoru array meets what you are looking for.
// Array.prototype.every() // is everyone 19 or older?

const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(function(comment) {
  if(comment.id === 823423) {
    return true;
  }
});
console.log(comment);

const singleComment = comments.find(comment => comment.id === 823423);
console.log(singleComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
console.table(newComments);