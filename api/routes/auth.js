var jwt = require('jwt-simple');

var auth = {
  login: function(req, res) {
    var token = req.body.token || '';

    if (token == '') { // If no token presented, return 401
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid Credentials"
      });
      return;
    }

    //Query DB to check if credentials are valid

    var dbUserObj = auth.validate(token);

    if (!dbUserObj) { // If authentication fails, return 401
      res.status(401);
      res.json({
        "status": 401,
        "message": "Invalid Credentials"
      });
      return;
    }

    if (dbUserObj) {
      //If token is valid
    }
  }
}
