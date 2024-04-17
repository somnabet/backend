const { userModel } = require("../models/user.model");

const getUsers = async (req, res) => {
  const data = await userModel.find();
  res.json(data);
};

const addUser = async (req, res) => {
  try {
    const docInDb = await userModel.create(req.body);
    res.json(docInDb);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addUser, getUsers };
