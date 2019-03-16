const express = require('express');
const exphbs  = require('express-handlebars');

const routes = require('./routes/index')
const app = express();

const PORT = process.env.PORT || 5000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
/**
 * Front-End Routes
 */
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
