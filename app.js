const express = require('express');

const app = express();

/*app.use('/next', () => {
    console.log("Middleware running")
})
*/

//ROUTES
app.get('/',(req, res) => {
    res.send('We are live')
});

app.get('/next', (req, res) => {
    res.send('Second page');
});

app.listen(3000);