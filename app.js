const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendfile(path.join(_dirname+'/Signup.html'));

}