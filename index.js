const express   =     require('express');
const cors      =     require('cors');
const app       =     express();
const session   =     require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
app.use(cors());

app.use(express.static('public'))
app.use(bodyParser.json({ extended: true }));
app.use(methodOverride('_method'));

const authController = require('./controllers/auth.js');
app.use('/auth', authController);

app.listen(4000, () =>{
    console.log('Server side listening')
});
