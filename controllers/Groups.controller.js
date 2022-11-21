const e = require("express");
const mongoose = require("mongoose");
const Groups = mongoose.model("Groups");

const submitNewGroups = async (req, res) => {
  try {
    // Later we can add this function
    // if(req.user.rol !== 'admin') {
    //     return res.status(401).json({
    //         msg: 'Unauthorized',
    //         details: 'You do not have access to make this process',
    //     });
    // }

    const { nameGroup } = req.body;

    const newElement = { nameGroup };

    const newGroup = new Groups(newElement);

    const result = await newGroup.save();

    return res.status(201).json({
      msg: "New group submitted",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const getAllGroups = async (req, res) => {
  try {
    const result = await Groups.find();

    return res.status(201).json({
      msg: "Groups founded",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const getGroupById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Groups.findById(id);

    return res.status(201).json({
      msg: "Group founded",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Group not founded",
      details: e.message,
    });
  }
};

const updateGroupById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Groups.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    return res.status(200).json({
      msg: "Group updated",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const removeGroupById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Groups.findByIdAndDelete(id);

    return res.status(201).json({
      msg: "Group removed",
      details: "Process completed",
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

module.exports = {
  submitNewGroups,
  getAllGroups,
  getGroupById,
  updateGroupById,
  removeGroupById,
};
