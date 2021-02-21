const TaskModel = require("../models/TaskSchema")


const addTask = (req,res) => {
    const task = new TaskModel();
    const body = req.params;
    const content = body.content;

    if(!content){
        res.status(500).send({message: "Empty data"})
    }else{
        task.save((err,taskStored) => {
            if(err){
                res.status(500).send({message:"Error in saving on DB"})
            }else{
                res.status(200)
            }
        })
    }
}

module.exports = {
    addTask
}