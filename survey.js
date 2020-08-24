const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = ["What's your name?","What's an activity you like doing?","What do you listen to while doing that"
  ,"Which meal is your favourite (eg: dinner, brunch, etc.)","What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?","What is your superpower?"
];
let surveryText = '';

rl.question(questions[0],(answer) => {
  surveryText += `${questions[0]} : ${answer} `;
  rl.question(questions[1], (answer) => {
    surveryText += `${questions[1]} : ${answer} `;
    rl.question(questions[2], (answer) => {
      surveryText += `${questions[2]} : ${answer} `;
      rl.question(questions[3], (answer) => {
        surveryText += `${questions[3]} : ${answer} `;
        rl.question(questions[4], (answer) => {
          surveryText += `${questions[4]} : ${answer} `;
          rl.question(questions[5], (answer) => {
            surveryText += `${questions[5]} : ${answer} `;
            rl.question(questions[6], (answer) => {
              surveryText += `${questions[6]} : ${answer} `;
              console.log(`Thank you for your valuable feedback :`);
              console.log("--------------------------------------------------------");
              console.log(`${surveryText}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});




            


          

