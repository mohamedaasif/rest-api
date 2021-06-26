const User = require("../model/user");

exports.createUser = async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    dob: req.body.dob,
    email: req.body.email,
    contact: req.body.contact,
    hobbies: req.body.hobbies,
  });

  try {
    const result = await user.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ message: "Error saving data" });
  }
};

exports.createMultipleUsers = async (req, res) => {
  const users = req.body;
  try {
    const result = await User.insertMany(users);
    res.json(result);
  } catch (err) {
    res.json({ message: "Error saving data" });
  }
};

exports.findAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ message: "Error finding data" });
  }
};

exports.findUser = async (req, res) => {
  const user_id = req.params["userId"];
  try {
    const result = await User.findById(user_id);
    res.json(result);
  } catch (err) {
    res.json({ message: "Error finding data" });
  }
};

exports.deleteUser = async (req, res) => {
  const user_id = req.params["userId"];
  try {
    const result = await User.deleteOne({ _id: user_id });
    res.json(result);
  } catch (err) {
    res.json({ message: "Error deleting data" });
  }
};

exports.deleteAllUsers = async (req, res) => {
  try {
    const result = await User.deleteMany();
    res.json(result);
  } catch (err) {
    res.json({ message: "Error deleting data" });
  }
};

exports.updateUser = async (req, res) => {
  const user_id = req.params["userId"];
  const update_user = req.body;
  try {
    const result = await User.updateOne(
      { _id: user_id },
      { $set: update_user }
    );
    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ message: "Error updating data" });
  }
};
