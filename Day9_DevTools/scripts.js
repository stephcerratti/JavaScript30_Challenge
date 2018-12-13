const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');

function makeGreen() {
  
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
console.log('Hello I am a %s string!', 'test');

// Styled
console.log('%c I am some great text', 'font-size:50px')

// warning!
console.warn('Oh no!');

// Error :|
console.error('shoot!');

// Info
console.info('this is some info')

// Testing
console.assert(1 === 2, 'That is false');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
})

// or you can collapse them:

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
  console.groupEnd(`${dog.name}`);
})


// counting
console.count('Wes');
console.count('Steph');
console.count('Steph');
console.count('Wes');
console.count('Steph');
console.count('Steph');
console.count('Wes');
console.count('Wes');
console.count('Steph');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/stephcerratti')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);