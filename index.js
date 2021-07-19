

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

const myFriends = ['John', 'Jill', 'Jacob', 'Jaxson', 'Jack', 'Jarome']

app.get('/api/users', function (req, res) {
    res.status(200).send(myFriends);
})


app.get('/weather/:temperature', (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    // console.log(temperature.temperature)
    res.status(200).send(phrase);
})

// app.get('/profile/:name', (req, res) => {
//     const {name} = req.params;
//     res.status(200).send(`Hi, ${name}!`)
// })

app.listen(4000, function () {
    console.log('Server running on 4000')
})


