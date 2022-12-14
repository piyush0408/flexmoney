const app = require("./app");

// const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// connecting database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});
