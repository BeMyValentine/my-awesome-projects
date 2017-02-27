var express = require("express");
var Target = require("../models/targets");
var targetRoutes = express.Router();


targetRoutes.get("/", function (req, res) {
    var query = {};
    if (req.query.firstName) query.firstName = req.query.firstName;
    if (req.query.lastName) query.lastName = req.query.lastName;

    Target.find(query, function (err, target) {
        if (err) return res.status(500).send(err);
        res.send(target);
    })
});

targetRoutes.get("/:targetId", function (req, res) {

    Target.findById(req.params.id, function (err, target) {
        if (err) return res.status(500).send(err);
        res.send(target);
    });

});


targetRoutes.post("/", function (req, res) {
    var target = new Target(req.body);

    target.save(function (err, newTarget) {
        if (err) return res.status(500).send(err);
        res.send(newTarget)
    })
});


targetRoutes.put("/:targetId", function (req, res) {
    Target.findOneAndUpdateById(req.params.targetId, req.body, {new: true}, function (err, updatedBounty) {
        if (err) return res.status(500).send(err);
        res.send(updatedBounty);
    });
});


targetRoutes.delete("/:targetId", function (req, res) {
    Target.findOneAndRemove({_id: req.params.targetId}, function (err, target) {
        if (err)return res.status(500).send(err);
        res.send({message: "Successfully eliminated target", success: true});
    })
});


module.exports = targetRoutes;