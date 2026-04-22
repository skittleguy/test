const express = require('express');
const app = express();
const path = require('path');

app.get('/teto-trap', (req, res) => {
    const userAgent = req.headers['user-agent'];

    if (userAgent.includes('Discordbot')) {
        res.sendFile(path.join(__dirname, 'hehe.png'));
    } 
    else {
        res.redirect('https://www.youtube.com/watch?v=JALbemLw3G4');
    }
});

app.listen(3000, () => console.log('Server is running!'));
