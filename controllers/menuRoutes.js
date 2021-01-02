const db = require("../models")
const router = require("express").Router();
console.log(db.MenuBella);

router.post("/api/bella",function(req,res){
    db.Menu_bella.create(req.body).then(function(data){
        res.json(data)
    }).catch(function(err){
        if(err) res.status(400).send(err)
    })
})

module.exports = router