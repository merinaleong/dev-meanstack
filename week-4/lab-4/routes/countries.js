var express = require("express");
var mongojs = require("mongojs");
var config = require("../config");
var db = mongojs(config.database, ['countries']);

var router = express.Router();

// get all countries
router.get("/countries", function(req, res, next) {
    //res.send("countries API");
    db.countries.find((err, data) => {
      if (err)
        res.send(err);

      res.json(data);
    });
});

// get single country
router.get("/countries/:id", function(req, res, next) {
    db.countries.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// create country
router.post("/countries", function(req, res, next) {
    var c = req.body;

    if (!c.population) {
      c.population = 0;
    }

    if (!c.country) {
        res.status(400);
        res.json(
            {"error": "Bad data, could not be inserted into the database."}
        )
    } else {
        db.countries.save(c, function(err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
});
// delete country
router.delete("/countries/:id", function(req, res, next) {
    db.countries.remove({_id: mongojs.ObjectId(req.params.id)},function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// update country
router.put("/countries/:id", function(req, res, next) {
    var c = req.body;
    var changedCountry = {};

    if (c.country) {
        changedCountry.country = c.country;
    }

    if (c.population) {
        changedCountry.population = c.population;
    }

    if (Object.keys(changedCountry).length == 0) {
        res.status(400);
        res.json(
            {"error": "Bad Data"}
        )
    } else {
        db.countries.update({_id: mongojs.ObjectId(req.params.id)}, changedCountry,{},function(err, data){
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
});


module.exports = router;
