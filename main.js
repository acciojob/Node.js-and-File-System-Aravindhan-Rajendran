const fs = require('fs');
const readline = require('readline');

// Create readline interface for command-line inputs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to remove the specified word from the file
const removeWordFromFile = (filename, word) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        reject(err);
      }

      // Remove all occurrences of the specified word
      const updatedContent = data.replace(new RegExp(`\\b${word}\\b`, 'g'), '');

      // Write the modified content back to the file
      fs.writeFile(filename, updatedContent, 'utf8', (err) => {
        if (err) {
          console.error(`Error reading file: ${err.message}`);
          reject(err);
        }
        console.log(`All occurrences of "${word}" have been removed from ${filename}`);
        resolve();
      });
    });
  });
};

// Prompt the user for the filename and word to remove
rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    removeWordFromFile(filename, word);
    rl.close();
  });
});