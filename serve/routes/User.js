const express = require("express");
const path = require("path");
const router = express.Router();
import UserCntrollers from "../controllers/User.controllers";
import bcrypt from "bcrypt";

import User from "../models/user";

// router.post("/new-user", async (req, res) => {
//   const body = req.body;
//   try {
//     const Newuser = await User.create(body);
//     console.log(Newuser);
//     res.json(Newuser);
//   } catch (error) {
//     console.log(error);
//     if (error.code == 11000) {
//       console.log(error);
//       res.json({ mensaje: "usuario ya esta registrado" });
//     }
//   }
// });

// router.post("/auth-user", async (req, res) => {
//   console.log(req.body);
//   const { firstname, password, email, role } = req.body;

//   try {
//     const LoginUser = await User.findOne({ email: email });
//     if (!LoginUser) {
//       return res.json({
//         mensaje: "error en el correo, por favor intentelo de nuevo",
//       });
//     } else {
//       const validarpassport = await bcrypt.compare(
//         password,
//         LoginUser.password
//       );
//       if (!validarpassport) {
//         return res.json({ mensaje: "contraseña incorrecta" });
//       } else {
//         return res.json({
//           id: LoginUser._id,
//           firstname: LoginUser.firstname,
//           lastname: LoginUser.lastname,
//           email: LoginUser.email,
//           role: LoginUser.role,
//         });
//       }
//     }
//   } catch (error) {
//     return res.json({ error });
//   }

// if (!validarpassport) {
//   res.json({ mensaje: "contraseña incorrecta" });
// } else {
//   res.json({ id: LoginUser._id });
// }
// });

// router.get("/users/:id", async (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   try {
//     const UserDB = await User.findById({ _id: id });
//     console.log(UserDB);
//     res.json({ UserDB });
//   } catch (err) {}
// });

// router.post("/updatUser", async (req, res) => {
//   const body = req.body;

//   try {
//     const updateUser = await User.findByIdAndUpdate(body.id, body, {
//       new: true,
//     });
//     console.log(updateUser);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.get("/engineer-all", async (req, res) => {
//   try {
//     const engineerAll = await User.find({ role: "ingeniero" });
//     console.log(engineerAll);
//     res.json({ engineerAll });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.get("/engineer/:id", async (req, res) => {
//   const _id = req.params.id;
//   console.log(req.params.id);

//   try {
//     const Engineers = await User.findOne({ _id });
//     res.json({ Engineers });
//     console.log(Engineers);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post("/enginnerMenss", async (req, res) => {
//   const body = req.body;
//   const objeUpdate = { $push: { mensajes: body.Messmundo } };

//   try {
//     const sendMens = await User.findByIdAndUpdate(body.id, objeUpdate, {
//       new: true,
//     });
//     res.json({ conformacion: "cargado" });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.get("/enginnerMenss/:id", async (req, res) => {
//   const _id = req.params.id;
//   try {
//     const ListMessEng = await User.findById({ _id });
//     res.json({ ListMessEng });
//   } catch (error) {
//     console.log(error);
//   }
// });

// con esta función pudo solo actualizar un campo y no necesito enviar mas información.
// router.put('/modificar-cliente', function(req, res) {
//   let body = req.body;
//   Cliente.updateOne({ _id: body._id }, {
//           $set: req.body
//       },

//   User.findOne({ firstname }, (err, user) => {
//     if (err) {
//       res.json({ mensaje: "error al autenticar el usuario" });
//     } else if (!user) {
//       res.json({ mensaje: "Usuario no encontrado" });
//     } else {
//       user.isCorrectPassword(password, (err, result) => {
//         if (err) {
//           res.json({ mensaje: "error al autenticar" });
//         } else if (result) {
//           res.json({ firstname, password, email, role });
//         } else {
//           res.json({ mensaje: "usuario o contraseña incorrecta" });
//         }
//       });
//     }
//   });
// });

// router.post("/auth-user", async (req, res) => {
//   console.log(req.body);
//   const { firstname, password, email, role } = req.body;

//   User.findOne({ firstname }, (err, user) => {
//     if (err) {
//       res.json({ mensaje: "error al autenticar el usuario" });
//     } else if (!user) {
//       res.json({ mensaje: "Usuario no encontrado" });
//     } else {
//       user.isCorrectPassword(password, (err, result) => {
//         if (err) {
//           res.json({ mensaje: "error al autenticar" });
//         } else if (result) {
//           res.json({ firstname, password, email, role });
//         } else {
//           res.json({ mensaje: "usuario o contraseña incorrecta" });
//         }
//       });
//     }
//   });
// });

router.post("/new-user", UserCntrollers.crearUser);
router.post("/auth-user", UserCntrollers.LoginUser);
router.get("/users/:id", UserCntrollers.userId);
router.post("/updatUser", UserCntrollers.UserApdate);
router.get("/engineer-all", UserCntrollers.engineerAll);
router.get("/engineer-all-homePage", UserCntrollers.engineerAllhomePage);
router.get("/engineer/:id", UserCntrollers.engineerId);
router.post("/enginnerMenss", UserCntrollers.enginnerMenss);
router.get("/enginnerMenss/:id", UserCntrollers.enginnerMenssId);
router.get("/enginnerProfession/:id", UserCntrollers.engineersProfession);
router.put("/UpdateInfoEspecial", UserCntrollers.UpdateInfoEspecial);
router.get("/searchEngineer/:id", UserCntrollers.SearchEngineer);
router.post(
  "/searchProfessionEngineer",
  UserCntrollers.SearchProfessionEngineer
);

module.exports = router;
