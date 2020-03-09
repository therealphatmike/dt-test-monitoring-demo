var express = require('express');

var app = express();
var port = 8888;

app.get('/:timeout', async (req, res) => {
    await setTimeout(() => res.send('Hello World'), req.params.timeout);
});

app.listen(port, function () {
    console.log(`Server running on port ${port}`);
});