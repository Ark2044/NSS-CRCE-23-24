//src/lib/models.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  srno: { type: Number, required: true, unique: true },
  vecno: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  eventsattained: [
    {
      eventcategory: String,
      eventname: String,
      date: mongoose.Schema.Types.Date,
      hoursalloted: mongoose.Schema.Types.Mixed,
    },
  ],
  deduction: { type: Number, default: 0 },
});

const Volunteer =
  mongoose.models.Volunteer || mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;
