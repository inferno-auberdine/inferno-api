const express = require('express');
const routes = require('./api/routes/raid.routes'); // import the routes
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const API_PORT = process.env.API_PORT || '3333';

const db = require("./api/models");

const corsOptions = {origin: '*'};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors(corsOptions));

app.use('/api', routes); //to use the routes

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const listener = app.listen(API_PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
});
