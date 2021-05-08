const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter an exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Please add a name",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Please insert a duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
