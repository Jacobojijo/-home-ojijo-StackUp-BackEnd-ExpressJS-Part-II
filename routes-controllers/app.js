const express = require('express');
const morgan = require('morgan');

const port  = 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});

app.use(morgan('dev'));

app.use('/auth', require('./routes/authHandling'));
app.use('/user', require('./routes/userHandling'));
app.use('/blogs', require('./routes/blogHandling'));