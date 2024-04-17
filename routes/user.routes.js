const { Router } = require("express");
const { addUser, getUsers } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("/", addUser);
userRouter.get("/", getUsers);

module.exports = { userRouter };
