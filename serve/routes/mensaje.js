import express, { json } from "express";
const router = express.Router();

import Mensaje from "../models/mensaje";
import User from "../models/user";

import MensajesCntroll from "../controllers/Mensaje.controllers";

// router.post("/new-mensaje", async (req, res) => {
//   const mensaj = req.body;

//   try {
//     const Newmens = await Mensaje.create(mensaj);

//     if (Newmens) {
//       const objeUpdate = { $push: { mensajes: Newmens } };
//       const CreateUser = await User.findByIdAndUpdate(mensaj.id, objeUpdate, {
//         new: true,
//       });
//       res.json({ UserMenss: CreateUser.mensajes });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

router.post("/new-mensaje", MensajesCntroll.Newmensaje);

module.exports = router;
