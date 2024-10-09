const express = require("express");
const adminRoute = express.Router();

adminRoute.get("/getproducts", (req, res) => {
  res.status(200).json({
    msg: "success message",
  });
});
adminRoute.get("/getorders", (req, res) => {
  res.status(200).json({
    msg: "success message",
  });
});
adminRoute.get("/information", (req, res) => {
  res.status(200).json({
    msg: "success message",
  });
});

module.exports = { adminRoute: adminRoute };
