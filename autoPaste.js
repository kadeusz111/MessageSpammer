const readline = require("readline");
const keySender = require('node-key-sender');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("░▒█▀▀▀█░▒█▀▀█░█▀▀▄░▒█▀▄▀█░▒█▀▄▀█░▒█▀▀▀░▒█▀▀▄░░░▒█▀▀▄░▒█░░▒█░░░▒█░▄▀░█▀▀▄░▒█▀▀▄░▒█▀▀▀░▒█░▒█░▒█▀▀▀█░▒█▀▀▀█\n░░▀▀▀▄▄░▒█▄▄█▒█▄▄█░▒█▒█▒█░▒█▒█▒█░▒█▀▀▀░▒█▄▄▀░░░▒█▀▀▄░▒▀▄▄▄▀░░░▒█▀▄░▒█▄▄█░▒█░▒█░▒█▀▀▀░▒█░▒█░░▀▀▀▄▄░░▄▄▄▀▀\n░▒█▄▄▄█░▒█░░░▒█░▒█░▒█░░▒█░▒█░░▒█░▒█▄▄▄░▒█░▒█░░░▒█▄▄█░░░▒█░░░░░▒█░▒█▒█░▒█░▒█▄▄█░▒█▄▄▄░░▀▄▄▀░▒█▄▄▄█░▒█▄▄▄█")


function autoPaste() {
  rl.question("The program will send what you have on the clipboard. If you want to continue, click enter: ", function() {

    rl.question("How many seconds the program should send text (default is 1 second): ", function(intervalInput) {
      const interval = intervalInput ? parseInt(intervalInput) : 1;

      console.log(`Paste will start in 5 seconds(during this time hover over the window where the text is to be pasted)....`);
      
      setTimeout(() => {
        let counter = 0;
        const intervalId = setInterval(() => {
          counter++;

          keySender.sendCombination(['control', 'v']);

          keySender.sendKey('enter');

          if (counter >= interval) {  
            clearInterval(intervalId);
            console.log("end.");
            rl.close();
          }
        }, 1000); 
      }, 5000); 
    });
  });
}

autoPaste();
