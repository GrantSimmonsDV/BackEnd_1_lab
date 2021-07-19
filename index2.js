const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

const dogs = ['german shepard', 'weener dog', 'husky', 'pitbull']

app.get('/dogs', (req, res) => {
    res.status(200).send(dogs)
})



app.listen(4050, () => {
    console.log('Server running on 4050')
})