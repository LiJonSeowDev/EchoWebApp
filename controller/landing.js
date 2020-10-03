exports.getLanding =  function(req, res, next) {
    res.render('landing', { title: 'Express' });
  };


exports.submitLeads =  function(req, res, next) {
    console.log("leadEmail : ", req.body.leadEmail);
    console.log(req.body);
    res.redirect('/');
  };
