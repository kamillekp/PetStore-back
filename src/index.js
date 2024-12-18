require('./dataBase/dbConnection');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//PORTA DO HOST OU LOCAL
app.listen(process.env.PORT || 3333, () => console.log('Server is running'));