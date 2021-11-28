import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
  firstname: { type: String },
  email: { type: String },
  mensaje: { type: String },
  img: { type: String },
  lastname: { type: String },
  publicacion: { type: Date, default: Date.now },
});

const Mensaje = mongoose.model("Mensaje", mensajeSchema);

export default Mensaje;
