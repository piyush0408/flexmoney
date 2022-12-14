// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const crypto = require("crypto");

// const userSchema = new mongoose.Schema({
//   slot: {
//     type: String,
//     required: [true, "Please Enter Your slot"],
//     maxLength: [30, "slot cannot exceed 30 characters"],
//     minLength: [4, "slot should have more than 4 characters"],
//   },
//   date: {
//     type: Date,
//     required: [true, "Please enter your date"],
//   },
//   user: {
//     type: mongoose.Schema.ObjectId,
//     ref: "User",
//     required: true,
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // userSchema.pre("save", async function (next) {
// //   if (!this.isModified("password")) {
// //     next();
// //   }

// //   this.password = await bcrypt.hash(this.password, 10);
// // });

// // // JWT TOKEN
// // userSchema.methods.getJWTToken = function () {
// //   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
// //     expiresIn: process.env.JWT_EXPIRE,
// //   });
// // };

// // // Compare Password

// // userSchema.methods.comparePassword = async function (password) {
// //   return await bcrypt.compare(password, this.password);
// // };

// // // Generating Password Reset Token
// // userSchema.methods.getResetPasswordToken = function () {
// //   // Generating Token
// //   const resetToken = crypto.randomBytes(20).toString("hex");

// //   // Hashing and adding resetPasswordToken to userSchema
// //   this.resetPasswordToken = crypto
// //     .createHash("sha256")
// //     .update(resetToken)
// //     .digest("hex");

// //   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

// //   return resetToken;
// // };

// module.exports = mongoose.model("Batch", userSchema);
