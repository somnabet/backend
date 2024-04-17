const { Router } = require("express");
const {
  addTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");

const taskRouter = Router();

taskRouter.post("/", addTask);
taskRouter.get("/", getTasks);
taskRouter.delete("/:id", deleteTask);
taskRouter.patch("/:id", updateTask);

module.exports = { taskRouter };
