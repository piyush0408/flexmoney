const User = require("../models/userModel");
const moment = require("moment");

const getDate = (date) => {
  const mm = moment(date).month() + 1;
  // console.log("moment month from db", mm);
  const yy = moment(date).year();
  // console.log("moment year  from db ", yy);
  const mmyy = `${mm}/${yy}`;
  // console.log("final string from db", mmyy);

  return mmyy;
};

exports.paymentInfo = async (req, res) => {
  let { name, email, age, slot, date } = req.body;
  // console.log("date", date);
  const utc = moment(date).format();
  // console.log("utc", utc);

  try {
    // find user using email

    const user = await User.findOne({ email });

    // if user is not found  create and pay and return
    if (!user) {
      try {
        let person = await User.create({ name, email, age, slot, date: utc });
        console.log("person", person);

        res.status(200).json({
          message: "payment successfully!!",
        });
        return;
      } catch (error) {
        console.log(error);
        res.status(400).json({
          message: " error occured while payment",
        });
        return;
      }
    }

    // console.log("person found", user);

    const mmyy = getDate(user.date);
    const nmy = getDate(utc);

    if (mmyy === nmy) {
      res.status(200).json({
        message: "payment already done for this month",
      });
      return;
    }

    // else change slot , date  and return payment successfull
    user.slot = slot;

    await user.save();

    res.status(200).json({
      message: "payment successfull!!",
    });
  } catch (error) {
    console.log("err", error);
    res.status(200).json({
      message: "error occured while finding user",
    });
  }
};
