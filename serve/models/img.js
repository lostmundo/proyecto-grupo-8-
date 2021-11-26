import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  path: { type: String },
});

const Imagen = mongoose.model("Imagen", ImageSchema);
export default Imagen;
