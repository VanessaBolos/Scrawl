exports.isLoggedIn = function (req, res, next) {
  if (req.user) {
    return next();
  } else {
    return res.redirect('/login'); // Redirect to login page
  }
};
