const mongoose = require("mongoose")
const app = require('./app')
const port = process.env.port || 3977
const {API_VERSION} = require("./config")

mongoose.set("useFindAndModify", false);

mongoose.connect(`mongodb+srv://portocreator:boomshakalaka@chromeextension.mr718.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser: true, useUnifiedTopology:true
}, (err, res) => {
    if(err){
        throw err
    }else{
        console.log("Connected to DB");

        app.listen(port, () => {
            console.log(`http://localhost:${port}/api/${API_VERSION}`)
        })
    }
})