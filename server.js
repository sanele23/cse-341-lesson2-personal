var express = require('express'); // node package
var app = express();
const port = process.env.PORT || 8080;

app.use('/', require('./routes/contacts'));

// function - to run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
