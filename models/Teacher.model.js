const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const uniqueValidator = require("mongoose-unique-validator");

const TeacherSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid Email"],
  },
  rol: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  group: {
    type: [
      {
        type: mongoose.ObjectId,
        ref: "Groups",
      },
    ],
  },
  rate: {
    type: Number,
    required: true,
  },
  salt: {
    type: String,
  },
});

TeacherSchema.plugin(uniqueValidator);

TeacherSchema.methods.encryptString = function (stringToEncrypt, salt) {
  return crypto
    .pbkdf2Sync(stringToEncrypt, salt, 10000, 512, "sha512")
    .toString("hex");
};

TeacherSchema.methods.hashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = this.encryptString(password, this.salt);
};

TeacherSchema.methods.verifyPassword = function (password) {
  return this.password === this.encryptString(password, this.salt);
};

TeacherSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      idTeacher: this._id,
      rol: this.rol,
      firstname: this.firstname,
      lastname: this.lastname,
    },
    process.env.SECRET
  );
};

TeacherSchema.methods.onSingGenerateJWT = function () {
  return {
    idTeacher: this._id,
    firstname: this.firstname,
    lastname: this.lastname,
    rol: this.rol,
    token: this.generateJWT(),
  };
};

mongoose.model("Teachers", TeacherSchema, "collectionTeachers");
