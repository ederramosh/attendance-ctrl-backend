const mongoose = require("mongoose");
const Teachers = mongoose.model("Teachers");

const newTeacher = async (req, res) => {
  try {
    const { password } = req.body;

    delete req.body.password;

    const { firstname, lastname, email, phone, group, rate } = req.body;

    const newObj = {
      firstname,
      lastname,
      email,
      phone,
      group,
      rate,
    };

    const teacher = new Teachers(req.body);

    teacher.hashPassword(password);

    await teacher.save();

    return res.status(201).json({
      msg: "New teacher created",
      details: teacher.onSingGenerateJWT(),
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const result = await Teachers.find().select('firstname lastname email phone rate').populate({
        path: 'group',
        select: {
            nameGroup: true,
        },
    });

    return res.status(201).json({
      msg: "List of teachers founded",
      details: result,
    });
  } catch (e) {
    return res.status(400).json({
      msg: "Error",
      details: e.message,
    });
  }
};

module.exports = {
  newTeacher,
  getAllTeachers,
};
