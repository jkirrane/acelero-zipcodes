var express = require('express');
var router = express.Router();
var zipcodes = require('zipcodes');

// router.use(function (req, res, next) {
//   console.log(req.headers)
//   if(req.headers['x-api-key'] == 'PAfWNRWCp43Wy1C9zj') {
//     next()
//   }
//   else {
//     return res.status(401).send({
//       "error": {
//         "code": "INVALID_AUTHORIZATION_CODE",
//         "message": "Invalid authorization code"
//       }
//     });
//   }
// })

/* GET zipcodes listing distances */
router.get('/:zipcode1/:zipcode2', function(req, res, next) {
  var zipcode1 = req.params.zipcode1
  var zipcode2 = req.params.zipcode2
  var distance = zipcodes.distance(zipcode1, zipcode2)
  res.send({
    zipcode1: zipcode1,
    zipcode2: zipcode2,
    distance: distance
  });
});

module.exports = router;
