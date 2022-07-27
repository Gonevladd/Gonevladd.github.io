const express = require('express');

const app = express();
const PORT = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server is working!');
})

app.post('/test', (req, res) => {
    console.log(req.body);
    res.send("Done!");
})

app.listen(PORT, () => {
    console.log('Server is working on PORT: ' + PORT);
})