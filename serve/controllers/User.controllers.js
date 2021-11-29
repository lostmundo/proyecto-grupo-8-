const UserCntrollers = {};
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

UserCntrollers.crearUser = async (req, res) => {
  const body = req.body;
  try {
    const Newuser = await User.create(body);
    console.log(Newuser);
    const token = jwt.sign({ _id: Newuser._id }, "secreto");
    res.json(Newuser);
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      console.log(error);
      res.json({ mensaje: "usuario ya esta registrado" });
    }
  }
};

UserCntrollers.LoginUser = async (req, res) => {
  console.log(req.body);
  const { password, email, role } = req.body;

  try {
    const LoginUser = await User.findOne({ email: email });
    if (!LoginUser) {
      return res.json({
        mensaje:
          "error en el correo o en la contraseña, por favor intentelo de nuevo",
      });
    } else {
      const validarpassport = await bcrypt.compare(
        password,
        LoginUser.password
      );
      if (!validarpassport) {
        return res.json({ mensaje: "contraseña incorrecta" });
      } else {
        const token = jwt.sign({ _id: LoginUser._id }, "secreto");
        return res.json({
          id: LoginUser._id,
          firstname: LoginUser.firstname,
          lastname: LoginUser.lastname,
          email: LoginUser.email,
          img: LoginUser.img,
          role: LoginUser.role,
          token,
        });
      }
    }
  } catch (error) {
    return res.json({ error });
  }
};

UserCntrollers.userId = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const UserDB = await User.findById({ _id: id });
    console.log(UserDB);
    res.json({ UserDB });
  } catch (err) {}
};

UserCntrollers.UserApdate = async (req, res) => {
  const body = req.body;

  try {
    const updateUser = await User.findByIdAndUpdate(body.id, body, {
      new: true,
    });
    res.json({ updateUser });
  } catch (error) {
    console.log(error);
  }
};

UserCntrollers.engineerAll = async (req, res) => {
  try {
    const engineerAll = await User.find({ creado: "true" });
    res.json({ engineerAll });
  } catch (error) {
    console.log(error);
  }
};
UserCntrollers.engineerAllhomePage = async (req, res) => {
  try {
    const engineerHome = await User.find({ role: "ingeniero" });
    res.json({ engineerHome });
  } catch (error) {
    console.log(error);
  }
};

UserCntrollers.engineerId = async (req, res) => {
  const _id = req.params.id;
  console.log(req.params.id);

  try {
    const Engineers = await User.findOne({ _id });
    res.json({ Engineers });
    console.log(Engineers);
  } catch (error) {
    console.log(error);
  }
};

UserCntrollers.enginnerMenss = async (req, res) => {
  const body = req.body;
  const objeUpdate = { $push: { mensajes: body.Messmundo } };

  try {
    const sendMens = await User.findByIdAndUpdate(body.id, objeUpdate, {
      new: true,
    });
    res.json({ conformacion: "cargado" });
  } catch (error) {
    console.log(error);
  }
};

UserCntrollers.enginnerMenssId = async (req, res) => {
  const _id = req.params.id;
  try {
    const ListMessEng = await User.findById({ _id });
    res.json({ ListMessEng });
  } catch (error) {
    console.log(error);
  }
};

UserCntrollers.engineersProfession = async (req, res) => {
  const ingenieria = req.params.id;
  try {
    const ProfessionEngineer = await User.find({
      ingenieria: ingenieria,
      creado: "true",
    });
    res.json({ ProfessionEngineer });
  } catch (error) {
    console.log(error);
  }
};

UserCntrollers.UpdateInfoEspecial = async (req, res) => {
  const { firstname, id, email, lastname, contrasenna } = req.body;
  const contraseña = await bcrypt.hash(contrasenna, 10);
  const password = contraseña;
  const cambios = { email, lastname, password, firstname };

  try {
    const UpdateInfo = await User.findByIdAndUpdate(id, cambios, { new: true });
    res.json({ UpdateInfo });
    console.log(UpdateInfo);
  } catch (error) {
    res.json({ mensaje: "sucedio un error en el email ya esta registrado" });
  }
};

UserCntrollers.SearchEngineer = async (req, res) => {
  const body = req.params.id;
  try {
    const EngineerSearch = await User.find({
      creado: "true",
      firstname: { $regex: ".*" + body + ".*", $options: "i" },
    });

    res.json({ EngineerSearch });
    console.log(EngineerSearch);
  } catch (error) {
    console.log(error);
  }
};

UserCntrollers.SearchProfessionEngineer = async (req, res) => {
  const { filtroIng, buscarIng } = req.body;

  try {
    const ProfessionSearch = await User.find({
      ingenieria: filtroIng,
      creado: "true",
      firstname: { $regex: ".*" + buscarIng + ".*", $options: "i" },
    });
    res.json({ ProfessionSearch });
  } catch (error) {
    console.log(error);
  }
};

export default UserCntrollers;
