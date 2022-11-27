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

const updateTeacher = async ( req, res ) => {
  try {
    const { email } = req.body;

    const validator = await Teachers.findOne({ email: email });

    if( !validator ) {
      return res.status(400).json({
        msg: 'Teacher not founded',
        details: 'Please check your credentials',
      });
    }

    const teacherUpdated = await Teachers.findOneAndUpdate(
      { email: email },
      { $set: req.body },
      {
        fields: {'firstname': 1, 'lastname': 1, 'email': 1, 'phone': 1, 'group': 1, 'rate': 1},
        new: true,
      }
      )
    
      return res.status(200).json({
        msg: 'Teacher has been updated',
        details: teacherUpdated,
      });

  } catch (e) {
      return res.status(400).json({
        msg: 'Error',
        details: e.message,
      })
  }
}

const removeTeacher = async ( req, res ) => {
  try {
    const { email } = req.body;
    const answer = await Teachers.findOneAndDelete({ email: email });
    return res.status(200).json({
      msg: 'Teachers has been removed',
      details: 'User removed it',
    })
  } catch (e) {
    return res.status(400).json({
      msg: 'Error',
      details: e.message,
    })
  }
}

module.exports = {
  newTeacher,
  getAllTeachers,
  updateTeacher,
  removeTeacher,
};
