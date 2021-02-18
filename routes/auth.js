var express = require('express')
var bcrypt = require("bcrypt-inzi")
var jwt = require('jsonwebtoken');
var { foodUserModel, foodOtpModel,} = require('../dbconn/module')
var router = express.Router();
var SERVER_SECRET = process.env.SECRET || "1234";
// var postmark = require("postmark");
// var emailApi = process.env.EMAIL_API || "7776"; 
// var client = new postmark.ServerClient(emailApi);

router.post("/signup", (req, res, next) => {
    console.log(req.body)
    if (!req.body.name ||
        !req.body.email ||
        !req.body.password ||
        !req.body.phone) {

        res.status(403).send(`
            please send name, email, passwod, phone and gender in json body.
            e.g:
            {
                "name": "jahanzaib",
                "email": "jahanzaib@gmail.com",
                "password": "123",
                "phone": "034320492",
                "gender": "Male"
            }`)
        return;
    }

    foodUserModel.findOne({ email: req.body.email },
        function (err, doc) {
            if (!err && !doc) {

                bcrypt.stringToHash(req.body.password).then(function (hash) {

                    var newUser = new foodUserModel({
                        "name": req.body.name,
                        "email": req.body.email,
                        "password": hash,
                        "phone": req.body.phone,
                    })
                    newUser.save((err, data) => {
                        if (!err) {
                            res.send({
                                status: 200,
                                message: "user created"
                            })
                        } else {
                            console.log(err);
                            res.status(500).send({
                                message: "user create error, " + err
                            })
                        }
                    });
                })

            } else if (err) {
                res.status(500).send({
                    message: "db error"
                })
            } else {
                res.send({
                    message: "user already exist"
                })
            }
        })

})
module.exports = router;
