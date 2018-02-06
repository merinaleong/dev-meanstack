var express = require("express");
var mongojs = require('mongojs'); 
var config = require('../config');
var db = mongojs(config.database_local, ['countries']); 

var router = express.Router();

// get all countries
router.get("/countries", function(req, res, next) {
    //res.send("COUNTRIES API");
    db.countries.find( (err, data) => {
        if(err)
            res.send(err);

        res.json(data); 
    })
});

// get one country by id
router.get("/countries/:id", function(req, res, next) {
    db.countries.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// add a country
router.post("/countries", function(req, res, next) {
    var c = req.body;

    if (!c.population) {
        c.population = 0;
    }

    if (!c.country)  {
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
        })
    }
});

// delete a country
router.delete("/countries/:id", function(req, res, next) {
    db.countries.remove({_id: mongojs.ObjectId(req.params.id)},function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// edit a country
router.put("/countries/:id", function(req, res, next) {
    var c = req.body;
    var c2 = {}; 

    if (c.country) {
        c2.country = c.country;
    }

    if (c.population) {
        c2.population = c.population;
    }

    if (!c2) {
        res.status(400);
        res.json(
            {"error": "Bad Data"}
        )        
    } else {
        db.countries.update({_id: mongojs.ObjectId(req.params.id)}, c2,{},function(err, data){
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
});



module.exports = router; 

