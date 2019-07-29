const express = require('express');
const router = express.Router();
var multer = require('multer');



// Multer Settings
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
  })
   

var upload = multer({ storage: storage, preservePath:true});
var cpUpload = upload.fields([{ name: 'profile_pic_path', maxCount: 1 }]);

var UserController = require('../controller/userController');



router.post('/upload',cpUpload,UserController.add_a_user);
router.get('/get',UserController.view_a_user);



module.exports = router;
