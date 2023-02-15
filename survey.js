// Require the 'readline' module to handle user input
const readline = require('readline');

// Create a readline interface with the standard input and output streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user a series of questions, one by one
rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              // Once all questions are answered, output the profile paragraph
              console.log(`Hi, my name is ${name} (you can call me ${name.split(' ')[0]}). I enjoy ${activity}, listening to ${music} while doing it. My favourite meal is ${meal} and my favourite thing to eat for that is ${food}. My favourite sport is ${sport} and my superpower is ${superpower}.`);
              
              // Close the readline interface
              rl.close();
            });
          });
        });
      });
    });
  });
});