const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/signup',(req, res) => {
  res.status(200).json({'sucess': 200});
});

router.post('/signin', (req,res) => {
  let data = req.body;

  let userExist = true;
  if(userExist)
  {

  }else
  {
    res.status(200).json({
      "status": "fail",
      "message": "username and/or password incorrect!"
    });
  }
});

module.exports = router;
