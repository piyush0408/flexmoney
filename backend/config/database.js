const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", true);
  // mongoose.connect(process.env.MONGO_URL)
  // mongoose
  //   .connect(process.env.DB, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     useCreateIndex: true,
  //   })
  mongoose
    .connect(process.env.DB)
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log("error occured while connecting database");
    });
};

module.exports = connectDatabase;
