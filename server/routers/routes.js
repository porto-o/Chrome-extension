const express = require("express")
const TaskController = require("../controllers/TaskController")
const api = express.Router();

api.post("/addTask/:content", TaskController.addTask)

module.exports = api