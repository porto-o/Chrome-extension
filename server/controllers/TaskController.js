const TaskModel = require("../models/TaskSchema")


const addTask = (req,res) => {
    const task = new TaskModel();
    const body = req.params;
    const content = body.content;
    const id = body.id
    const time = body.time

    if(!content || !id){
        res.status(500).send({message: "Empty data :("})
    }else{
        task.id = id;
        task.content = content;
        task.date = Date.now()
        task.hours = time;
        task.save((err,taskStored) => {
            if(err){
                res.status(500).send({message:"Error in saving on DB"})
            }else{
                console.log("Saved lol")
                res.status(200)
            }
        })
    }
}

const getTask = (req,res) => {
    TaskModel.find("content", (err,resTask) => {
        if(err){
            console.log(err)
        }else{
            console.log(resTask)
            res.status(200).send({message: resTask})
        }
    })
}

module.exports = {
    addTask,
    getTask
}