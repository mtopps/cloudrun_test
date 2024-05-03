const express = require('express');
const app = express();
let count = 0;

app.get('/count', (req, res) => {
    count++;
    res.send(count.toString());
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});