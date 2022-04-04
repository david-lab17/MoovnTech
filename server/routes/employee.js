const employee = require("../models/Employee");



const router = require("express").Router();


//CREATE

router.post("/",  async (req, res) => {
    const newEmployee = new Employee(req.body);
  
    try {
      const savedEmployee = await newEmployee.save();
      res.status(200).json(savedEmployee);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedEmployee);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE
router.delete("/:id", async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.params.id);
      res.status(200).json("Employee has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });



//GET Employee
router.get("/find/:id", async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json(err);
    }
  });




  module.exports = router;