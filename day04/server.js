// server.js
// My very first Node.js server!

// 1. Import required modules
const http = require('http');
const chalk = require('chalk'); // I installed this package to make logs colorful!

// 2. Define constants
const PORT = 3000;
const HOSTNAME = 'localhost';

// 3. Create the server
const server = http.createServer((req, res) => {
    // This function runs every time a request comes in

    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body
    res.end('Hello, World!');
});

// 4. Start the server and listen for requests
server.listen(PORT, HOSTNAME, () => {
    console.log(chalk.green(`Server is running at http://${HOSTNAME}:${PORT}/`));
    console.log(chalk.yellow('Press Ctrl+C to stop the server.'));
});
