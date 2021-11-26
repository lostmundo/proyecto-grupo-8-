import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
  firstname: { type: String },
  email: { type: String },
  mensaje: { type: String },
});

const Mensaje = mongoose.model("Mensaje", mensajeSchema);

export default Mensaje;
