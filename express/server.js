const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 9000
const app = express()



// middleware

app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'index.html'))
})



app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '/views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});





app.listen(PORT, console.log(`Server Is Rinning On port ${PORT}`))