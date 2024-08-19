const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const bcrypt = require('bcrypt');

// LOCAL Register route
router.get('/signup', (req, res) => {
  res.render('signup', { error_messages: req.flash('error') });
});

router.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    req.flash('error', 'Passwords do not match.');
    return res.redirect('/signup');
  }

  try {
    const existingUser = await User.findOne({ 'local.email': email });
    if (existingUser) {
      req.flash('error', 'Email is already taken.');
      return res.redirect('/signup');
    }

    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    const newUser = new User({
      'local.email': email,
      'local.password': hashedPassword
    });

    await newUser.save();

    // Log in the user after sign-up
    req.login(newUser, (err) => {
      if (err) {
        console.error(err);
        req.flash('error', 'An error occurred while logging in.');
        return res.redirect('/signup');
      }
      res.redirect('/dashboard');
    });

  } catch (err) {
    console.error(err);
    req.flash('error', 'An error occurred during registration.');
    res.redirect('/signup');
  }
});

// LOCAL Login route
router.get('/login', (req, res) => {
  res.render('login', { error_messages: req.flash('error') });
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

// Google Login Route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Google Callback Route
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
  })
);

// Logout Route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if(err) {
      console.log(err);
      return res.send('Error logging out');
    }
    req.session.destroy(error => {
      if(error) {
        console.log(error);
        res.send('Error destroying session');
      } else {
        res.redirect('/');
      }
    });
  });
});

module.exports = router;
