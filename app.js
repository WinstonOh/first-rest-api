const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('dotenv/config');

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

//Establish database connection
mongoose.connect(
   process.env.DB_CONNECTION,
    () =>
    console.log("DATABASE CONNENCTION ESTABLISHED"))
//listen to server
app.listen(3000);