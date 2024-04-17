const { taskModel } = require("../models/task.model");

const getTasks = async (req, res) => {
  const data = await taskModel.find();
  res.json(data);
};

const addTask = async (req, res) => {
  try {
    const docInDb = await taskModel.create(req.body);
    res.json(docInDb);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const data = await taskModel.findByIdAndDelete(req.params.id);
    if (data) return res.json("borrado");
    res.status(404).json("no se ha encontrado ningun elemento con ese id");
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const data = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (data) return res.json("actualizado");
    res.status(404).json("no se ha encontrado ningun elemento con ese id");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addTask, getTasks, deleteTask, updateTask };
