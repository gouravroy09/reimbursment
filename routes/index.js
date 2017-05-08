
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('boot', { title: 'Express' });
};