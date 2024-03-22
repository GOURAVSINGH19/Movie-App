var express = require('express');
var router = express.Router();
const usermodel=require('./users');
const passport = require('passport');
const localStrategy = require('passport-local');

passport.use(new localStrategy(usermodel.authenticate()));
    
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/home",isloggedIn,function(req, res){
  res.render("welcome to profile")
})

router.post('/register',function(req, res){
  let userdata=new usermodel({
    username:req.body.username,
  })

  usermodel.register(userdata,req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect('/profile')
    })
  })
});

router.post('/login',passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/",
}),function(req, res){})

router.get("/logout",function(req,res){
  req.logout(function(err){
    if(err){return next(err);}
    res.redirect('/');
  })
});


function isloggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}


module.exports = router;
