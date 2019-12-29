const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('lib/jasmine_examples/scoreCard.js'));


app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(3000, () => console.log('App listening on port 3000!'));
