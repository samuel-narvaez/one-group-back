const express = require('express');
var bodyParser = require('body-parser');
const dotenv =  require('dotenv');
const cors = require('cors');
const fileupload = require('express-fileupload');


const app = express();
app.use(cors());
app.use(fileupload());
app.use(express.static('src/uploads'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 4000;

//Routes
const routes = require('./routes');
routes(app);

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});

module.exports = app


