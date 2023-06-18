const express  = require('express')
const dotenv = require("dotenv");
const app = express();
const morgan = require("morgan")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/error')

app.use(express.json())
app.use(cors())
// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//db Connect
require('./config/db')

//cookies parser
app.use(cookieParser())

// Load env file
dotenv.config({path : "./config.env"})

// Router File
let auth = require('./routes/auth')
app.use('/api/v1/auth', auth)
app.use(errorHandler)

// dev logging middleware

if(process.env.NODE_ENV == "development"){
    app.use(morgan("dev"))
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
