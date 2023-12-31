const ErrorResponse = require('../Utils/errorResponse')
const User = require('../models/user')
const asyncHandler = require('../middleware/async')


// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async(req,res,next)=>{
    const {name, email, password} = req.body

    const user = await User.create({
        name,
        email,
        password
    })

    // res.status(200).json({ success: true, result: user })
    sendRokenResponse(user, 200, res)
})


// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
  
    // Validate emil & password
    if (!email || !password) {
      return res.send({result: "Please provide an email and password"});
    }
  
    // Check for user
    const user = await User.findOne({ email }).select('+password');
  
    if (!user) {
      return res.send({result:'Invalid credentials' });
    }
  
    // Check if password matches
    const isMatch = await user.comparePassword(password);
  
    if (!isMatch) {
      return res.send({result:'Invalid credentials' });
    }
     
    sendRokenResponse(user, 200, res);
  });



// Get token from model, create cookie and send response

const sendRokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    }

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
      }

    res
        .status(statusCode)
        .cookie("token", token, options)
        .json({
            success: true,
            token,
            
        })
}