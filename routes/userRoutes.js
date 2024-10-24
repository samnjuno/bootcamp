// importing packages and modules
const express = require('express');
const { registerUser,loginuser,logoutuser,getuser,edituser}= reuire('../controllers/usercontroller');
const{ check } = require('express-validator');
const router = express.Router();

//registration route
router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please provide a valid email').isEmail,
        check('password','password must be 6 characters or more').isLength({ min:6})
    ],
    registerUser
);

//login route
router.post('/login',loginuser);

//get user
router.get('/individual',getuser);

//edit user
router.put(
    '/individual',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please provide a valid email').isEmail,
        check('password','password must be 6 characters or more').isLength({ min:6}) 
    ],
    edituser
);
//logout
router.get('/logout', logoutUser);

module.exports = router;
