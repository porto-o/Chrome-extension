const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: {
        type: String
    },
    content: {
        type:String
    }
})

module.exports = mongoose.model("Task", TaskSchema)