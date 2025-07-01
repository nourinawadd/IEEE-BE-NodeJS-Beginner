const fs = require('fs');

// Get arguments: node search.js filename.txt query
const [,, fileName, query] = process.argv;

if (!fileName || !query) {
  console.log("Please write: node Task-3.js <filename> <query>");
  process.exit(1);
}

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error("File not found.");
    return;
  }

  const lines = data.split('\n');
  const match = lines.find(line => line.includes(query));

  if (match) {
    console.log(match);
  } else {
    console.log("THAT'S NOT FUNNY");
  }
});
