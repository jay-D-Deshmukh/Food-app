import { Schema,model } from "mongoose";

const restorentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

restorentSchema.set("timestamps", true);
const Restorent = model("Restorent", restorentSchema);

export default Restorent;
