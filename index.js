const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('news api sending')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})


app.listen(port, () => console.log('dragon news running on port', port));