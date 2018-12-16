const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require("fs");
const RSA_PRIVATE_KEY = fs.readFileSync('./jwtRS256.key');

router.post('/signup', (req, res) => {
  res.status(200).json({'sucess': 200});
});

router.post('/signin', (req, res) => {
  let data = req.body;

  let userExist = true;

  if (userExist) {
    //token key
    // ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
    // # Don't add passphrase
    // openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
    // cat jwtRS256.key
    // cat jwtRS256.key.pub
    const token = jwt.sign({}, RSA_PRIVATE_KEY, {
      algorithm: 'RS256',
      expiresIn: 1,
      subject: data.username
    });


    res.status(200).json(
      {idToken: token}
    );
  } else {
    res.status(200).json({
      "status": "fail",
      "message": "username and/or password incorrect!"
    });
  }
});


router.get('/protected',(req,res)=>{

});

module.exports = router;
