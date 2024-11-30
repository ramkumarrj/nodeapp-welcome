// app.js
const express = require('express');
const app = express();

// Define a route for the welcome page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Node.js Application!</h1><p>This is a simple application using Node.js and Express.</p>');
});

// Start the server on port 3000 only if this module is run directly
if (require.main === module) {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}`);
    });
}

module.exports = app; // Export the app for testing

