const router = require("express").Router();
const Workout = require("../models/workoutModel")

// can i name the /api/workout file path anything?
router.post("/api/workouts", function (req, res) {
    Workout.create(req.body)
    .then(theReturnedWorkOutWeJustCreated => {
        res.json(theReturnedWorkOutWeJustCreated);
    
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts/:id", function (req, res) {
    Workout.updateOne({id: req.params})
    .then(function(retUpdatedWorkout){
        console.log(retUpdatedWorkout)
    })
});

router.get("/api/workouts/range", function (req, res){
    Workout.find({})
    .then(function (retWorkoutsRange){
        console.log(retWorkoutsRange)
        res.json(retWorkoutsRange)
    })
})
// /api/workouts/range



module.exports = router


/*

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

*/