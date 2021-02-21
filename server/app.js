const express = require("express")
const bodyParser = require("body-parser");

const app = express()
const {API_VERSION} = require('./config')

//Load routings
//...
const TaskRoutes = require("./routers/routes");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.use(`/api/${API_VERSION}`, TaskRoutes)

module.exports = app;