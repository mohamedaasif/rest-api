const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// Create single user
router.post("/createUser", userController.createUser);

// Create multiple users
router.post("/createMultipleUsers", userController.createMultipleUsers);

// Get all Users
router.get("/getAllUsers", userController.findAllUsers);

// Get specific user by :id
router.get("/getUser/:userId", userController.findUser);

// Delete specific user by :id
router.delete("/deleteUser/:userId", userController.deleteUser);

// Delete all Users
router.delete("/deleteAllUsers", userController.deleteAllUsers);

// Update specific user by :id
router.put("/updateUser/:userId", userController.updateUser);

module.exports = router;
