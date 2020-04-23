const router = require("express").Router();
var path = require('path');


// file path needs adjustment (__dirname)...?? direct path...??
// look thru activities for week17 for filepath


router.get("/exercise", function (req, res) {
    res.sendFile(path.join("../Develop/public/exercise.html"), function (err) {
        // res.sendFile(path.join(__dirname, "../public/index.html"));
        if (err) {
          console.log(err)
        } else {
          console.log('Success')
        }
      })
});

// router.get("/", function (req, res) {
//     res.sendFile(path.join("../Develop/public/index.html"), function (err) {
//         // res.sendFile(path.join(__dirname, "../public/index.html"));
//         if (err) {
//           console.log(err)
//         } else {
//           console.log('Success')
//         }
//       })
// });

// router.get("/stat", function (req, res) {
//     res.sendFile(path.join("../Develop/public/stats.html"), function (err) {
//         // res.sendFile(path.join(__dirname, "../public/index.html"));
//         if (err) {
//           console.log(err)
//         } else {
//           console.log('Success')
//         }
//       })
// });

module.exports = router