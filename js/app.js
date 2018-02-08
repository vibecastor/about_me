'use strict';

var userName = prompt('Hi! So awesome that you are here!  What is your name?');

alert('Howdy, ' + userName + ', nice to meet you! Welcome to my second javascript project ever!  We are going to play a quick game where you try to guess things that you might not know about me.');
console.log('User was asked for their name, responded with ' + userName + '.');

var answer1 = prompt('Do you think I like music?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You\'re right, ' + userName + '! I am a percussionist and I play in a local indie rock band called "The Desperate".  It\'s safe to save that I love music!');
} else if(answer1 === 'no' || answer1 === 'n') {
  alert('Sorry, ' + userName + '.  I love music!  You probably don\'t know this about me yet but I\'m a classically trained percussionist and I also play in a local indie rock band called "The Desperate"!');
} else { alert('Sorry, that is not a valid answer.');
}
console.log('User was asked do you think I like music? Responded with ' + answer1 + '.');

var answer2 = prompt('Next question! Do you think I can sing?').toLowerCase().trim();

if (answer2 === 'no' || answer2 === 'n') {
  alert('You are correct, ' + userName + '!  When I attempt to sing, it sounds rather unpleasant :)!');
}else if (answer2 === 'yes' || answer2 === 'y') {
  alert('Sorry, ' + userName + ', I have the voice of a drowning rat.');
} else { alert('That is not a valid response.');
}
console.log('User was asked do you think I can sing? Responded with ' + answer2 + '.');

var answer3 = prompt('OK let\'s try a new question!  Do you think I\'m from Baltimore, MD?');

if (answer3 === 'yes' || answer3 === 'y') {
  alert('You are correct, ' + userName + '!  I grew up about a 45 min drive outside of Baltimore hon!  That\'s b-more slang for friend!');
}else if (answer3 === 'no' || answer3 === 'n') {
  alert('Sorry, ' + userName + ', I am from Baltimore.  Fun fact, Baltimore is also known as "Charm City"!');
} else { alert('Try again, ' + userName + 'that is not a valid response to the question.');
}
console.log('User was asked Do you think I\'m from Baltimore, MD?  Responded with ' + answer3 + '.');

var answer4 = prompt('Now for another question.  Do you think I like Thai food?');

if (answer4 === 'yes' || answer4 === 'y') {
  alert('Of course I do!  Thai food is amazing!  I\'m very lucky because I get to eat Thai food most days since my fiancee is originally from Thailand!');
}else if (answer4 === 'no' || answer4 === 'n') {
  alert('Sorry, ' + userName + ' I love Thai food although I am a weakling when it comes to Thai chilis!');
} else { alert('Try again next time, ' + userName + ' that is not a valid answer.');
}
console.log('User was asked do you think I like Thai food?  Responded with ' + answer4 + '.');

var answer5 = prompt('OK, this is the final question so make it count!  Do I like coffee?');

if (answer5 === 'yes' || answer5 === 'y') {
  alert('I love coffee and drink at least two large carafes a day!');
}else if (answer5 === 'no' || answer5 === 'n') {
  alert('Well you had a 50/50 shot but you got it wrong.  Better luck next time, ' + userName + ' and thank you for playing!');
} else { alert('Try again next time, ' + userName + ' that is not a valid answer.');
}
console.log('User was asked do I like coffee?  Responded with ' + answer5 + '.');


for (var i = 0; i < 4; i++) {
  var answer6 = parseInt(prompt('Can you guess how many times have I been to Mexico?'));
  if (answer6 === 2) {
    alert('Wow, you got it right!  I\'ve been to Mexico two times.  Once for work and once for vacation!');
    break;
  } else if (answer6 < 2) {
    alert('Too low!');
  } else if (answer6 > 2) {
    alert('Too high');
  }
}
console.log('User was asked, How many times have I been to Mexico?  Responded with ' + answer6 + '.');

var answer7 = ['Chocolate', 'Strawberry', 'Salted Caramel', 'Black Rasberry', 'Coconut', 'Durian'];

for (var j = 0; answer7.length; j++) {
  var question7 = prompt('Can you guess which types of ice cream are my favorites?');
  for (var k = 0; k < answer7.length; k++) {
    if (question7 === answer7[k]) {
      alert('I\'m a sucker for good ice cream.  Yes, that particular flavor is one of my favorites!');
      break;
    }
  } if (k != j) {
    alert('Sorry that\'s not correct.  Please guess again!');
  }
  else {
    break;
  }
}
console.log('User was asked to guess my favorite ice cream flavors.  User responded with ' + question7 + '.');