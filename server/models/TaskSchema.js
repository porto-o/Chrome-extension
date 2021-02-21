const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    id: {
        type: String
    },
    content: {
        type:String
    },
    hours: {
        type: String
    },
    date: {
        type: Date
    }
})

module.exports = mongoose.model("Task", TaskSchema)