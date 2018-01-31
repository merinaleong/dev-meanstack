var express = require("express");
var mongojs = require("mongojs");
var config = require("../config");
var db = mongojs(config.database_local, ['students']);
var router = express.Router();

router.get("/students", function(req, res, next) {
    //res.send("STUDENTS API");
    db.students.find((err, data) => {
      if (err)
        res.send(err);

      res.json(data);
    });
});

// get single student
router.get("/students/:id", function(req, res, next) {
    db.students.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// create student
router.post("/students", function(req, res, next) {
    var student = req.body;

    if (!student.StartDate) {
        student.StartDate = new Date();
    }

    if (!student.FirstName || !student.LastName
        || !student.School)  {
        res.status(400);
        res.json(
            {"error": "Bad data, could not be inserted into the database."}
        )
    } else {
        db.students.save(student, function(err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
});
// delete student
router.delete("/students/:id", function(req, res, next) {
    db.students.remove({_id: mongojs.ObjectId(req.params.id)},function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// update student
router.put("/students/:id", function(req, res, next) {
    var student = req.body;
    var changedStudent = {};

    if (student.FirstName) {
        changedStudent.FirstName = student.FirstName;
    }

    if (student.LastName) {
        changedStudent.LastName = student.LastName;
    }

    if (student.School) {
        changedStudent.School = student.School;
    }

    if (student.StartDate) {
        changedStudent.StartDate = student.StartDate;
    }

    if (Object.keys(changedStudent).length == 0) {
        res.status(400);
        res.json(
            {"error": "Bad Data"}
        )
    } else {
        db.students.update({_id: mongojs.ObjectId(req.params.id)}, changedStudent,{},function(err, data){
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
});


module.exports = router;
