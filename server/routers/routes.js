const express = require("express")
const TaskController = require("../controllers/TaskController")
const UserController = require("../controllers/UserController")
const api = express.Router();

api.post("/addTask/:content", TaskController.addTask)
api.post("/signUp/:data", UserController.SignUp)
module.exports = api