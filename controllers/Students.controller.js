const mongoose = require("mongoose");
const Students = mongoose.model("Student");

const newStudent = async (req, res) => {
  try {
    const { completeName, group, phone, address, email, active } = req.body;

    const newObj = {
      completeName,
      group,
      phone,
      address,
      email,
      active,
    };

    const student = new Students(newObj);
    const result = await student.save();

    return res.status(200).json({
      msg: "Student saved succefully",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const result = await Students.find()
      .select("completeName phone address email active")
      .populate({
        path: "group",
        select: {
          nameGroup: true,
        },
      });

    if (!result) {
      return res.status(400).json({
        msg: "Error",
        details: "List of students empty",
      });
    }

    return res.status(200).json({
      msg: "Students founded",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const getStudentsByGroup = async (req, res) => {
  try {
    const { group } = req.body;

    const result = await Students.find({ group: group })
      .select("completeName phone address email active")
      .populate({
        path: "group",
        select: {
          nameGroup: true,
        },
      });

    return res.status(200).json({
      msg: "List founded",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const findStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Students.findById(id)
      .select("completeName phone address email active")
      .populate({
        path: "group",
        select: {
          nameGroup: true,
        },
      });

    return res.status(200).json({
      msg: "Student founded",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const updateStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Students.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    return res.status(200).json({
      msg: "Student information updated",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const removeStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Students.findByIdAndDelete(id);

    return res.status(201).json({
      msg: "Process completed successfully",
      details: "Item removed it",
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

module.exports = {
  newStudent,
  getAllStudents,
  getStudentsByGroup,
  findStudentById,
  updateStudentById,
  removeStudent,
};
