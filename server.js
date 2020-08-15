const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const waterLogRouter = require('./routes/waterLogRouter');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'ejs');



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
console.log('listening on port ${PORT}');
});

app.get('/', (req, res) => {
res.render('index'));
});

app.use('/water', waterLogRouter);

app.use('*', (req, res) => {
res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
res.status(err.status || 500).json ({
message: err.message,
stack: err.stack,
});
});
