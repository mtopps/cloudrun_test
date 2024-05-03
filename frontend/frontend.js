const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
    fetch('http://backend:5000/count')
        .then(response => response.text())
        .then(data => {
            res.send(`
                <!DOCTYPE html>
                <html>
                <body>
                    <h1>Welcome</h1>
                    <p>You have visited: ${data}</p>
                </body>
                </html>
            `);
        });
});

app.listen(3000, () => {
    console.log('Frontend is running on port 3000');
});