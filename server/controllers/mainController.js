const createLocals = (title, description) => ({
  title,
  description,
});
/**
 * GET /
 * Homepage 
*/
exports.homepage = (req, res) => {
  const locals = createLocals("SCRAWL APP", "Free NodeJS Notes App.");
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
};


/**
 * GET /
 * About 
*/
exports.about = (req, res) => {
  const locals = createLocals("About - Scrawl app", "Free NodeJS Notes App.");
  res.render('about', locals);
};