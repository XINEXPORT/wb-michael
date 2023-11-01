alert('Welcome to Halloween');
alert(`adaptation from John Carpenter's Halloween`);
alert('established in 2023, Dallas, TX by Christine Hoang');
alert('Happy Halloween!');

let username = prompt('Enter username');
let usernameFirstLetter = username[0];
usernameFirstLetter = usernameFirstLetter.toUpperCase();
let usernameOtherLetters = username.slice(1);
usernameOtherLetters = usernameOtherLetters.toLowerCase();
alert(`Good evening ${username}`);
alert('You are Laurie Strode from Haddonfield, IL. You are going to the Smith residnce for your weekend babysitting job.');
alert('While you are preparing snacks for the Smith children, you hear a loud noise coming from the basement of the house.');
alert('You decide to check on what caused the noise.');

let stairs = prompt ('Do you want to go downstairs? Type Y or N');
stairs = stairs.toUpperCase();
if (stairs==='Y'){
alert(`"I better go check on that!"`);
} else if (stairs==='N'); {
alert ('It was probably just the cat.');
}

alert ("You hear footsteps coming from the attic");
let numFootsteps = prompt ('How many footsteps did you hear?');
numFootsteps = Number(numFootsteps);

if(numFootsteps<2) {
alert(`It was probably the children playing upstairs`);
} else {
alert(`"That's strange. I dont think anyone is upstairs.`);
}
alert("The children are scared. You offer to put on a movie for them.");

const movieType = prompt('What genre would you like to watch?');
let movieName = prompt(`What movie do you want to watch?`);
let firstLetter = movieName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = movieName.slice(1);
otherLetters = otherLetters.toLowerCase();

movieName = firstLetter + otherLetters;

alert(`You put on a ${movieType} called ${movieName}.`);

alert('You are not sure what to do about the footsteps you heard upstairs.');
alert(`You think hard on what to do. Your options are:
A  Call the police
B  Go upstairs
C  Call the children's parents for advice
`);

let footstepsChoice = prompt('What would you like to do?');
footstepsChoice = footstepsChoice.toUpperCase();

let choice;
if (footstepsChoice ==='A'){
    choice = `"The police can investigate!"`;
}else if (footstepsChoice === 'B'){
    choice = `I guess I'll check it out.`;
}else if (footstepsChoice === 'C'){
    choice = 'I should call the parents. Maybe someone lives upstairs.';
}

alert(`You see Michael Meyers shadow cast on the wall as you turn the corner. As ${movieName} plays in the background, you lock yourself in the bathroom. You count to 5 hoping he dissapears.`);

let timer = 1;
while (timer <= 5) {
alert (`${timer}...`);
timer +=1;
};
alert('HE GOT YOU!');