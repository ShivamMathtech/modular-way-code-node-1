const express = require("express");
//
const { adminRoute } = require("./Route-Engine/admin/adminRoute");
const app = express();
require("dotenv").config();
app.use("/admin", adminRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
