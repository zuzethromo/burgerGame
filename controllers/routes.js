let express = require('express');
let router = express.Router();
let burger = require('../models/burger.js');

router.get('/', function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index',{burger_data});
    })
})

module.exports = router;