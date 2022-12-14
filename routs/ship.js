const express = require("express");
const Ship = require("../models/ship");

// initialisation
const ShipRouter = express.Router();
ShipRouter.get("/all", async (req, res) => {
  try {
    let result = await Ship.find();
    res.send({ result, msg: " All Shipping Order" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
ShipRouter.post("/add", async (req, res) => {
    try {
      let newShip = new Ship({ ...req.body });
      let result = await newShip.save();
      res.send({ result, msg: "sucefuly aded" });
      console.log(result);
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });

ShipRouter.delete('/delete/:id', async (req, res) => {
  try {
    let result = await Ship.findByIdAndRemove( req.params.id);
    res.send({ msg: " delete Shipping Order" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// router.delete('/delete/:id',async (req,res) => {
//   try {
//       const result = await Annonce.findByIdAndDelete({ _id: req.params.id,});
//       res.send({msg:"annonce deleted successfully"})
//   } catch (error) {
//       console.log(error);
//       res.status(500).send({ msg: "can not delete the annonce"})
      
//   }
// })



ShipRouter.put("/update/:id", async (req, res) => {
    try {
      let result = await Ship.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: { ...req.body } }
      );
      res.send({ msg: " Order updated.." });
    } catch (error) {
      console.log(error);
      res.send({ msg: "fail" });
    }
  });

module.exports = ShipRouter;
