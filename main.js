const fs = require('fs');
const readline = require('readline');

// Create readline interface for command-line inputs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to remove the specified word from the file
const removeWordFromFile = (filename, word) => {
  // Read the file content
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    // Remove all occurrences of the specified word
    const updatedContent = data.split(word).join('');

    // Write the modified content back to the file
    fs.writeFile(filename, updatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${err.message}`);
        return;
      }
      console.log(`All occurrences of "${word}" have been removed from ${filename}`);
    });
  });
};

// Prompt the user for the filename and word to remove
rl.question('Enter the filename: ', (filename) => {
  rl.question('Enter the word to remove: ', (word) => {
    // Call the function to remove the word from the file
    removeWordFromFile(filename, word);
    rl.close();
  });
});
