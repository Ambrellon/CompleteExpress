const express = require('express');
const app = express();
const routes = require('./routerMon.js');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(routes);


let Countries = [`England`, `Wales`, `Scotland`, `Northern Ireland`];





const deleteMiddleware = (req, res, next) => {
    console.log("Deleted");
    next();
}



const server = app.listen(2719, () => console.log(`Server started on port ${server.address().port}`));

module.exports = server;