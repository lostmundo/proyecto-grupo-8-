const MensajesCntroll = {};
import Mensaje from "../models/mensaje";
import User from "../models/user";

MensajesCntroll.Newmensaje = async (req, res) => {
  const mensaj = req.body;
  console.log(mensaj);

  try {
    const Newmens = await Mensaje.create(mensaj);

    if (Newmens) {
      const objeUpdate = { $push: { mensajes: Newmens } };
      const CreateUser = await User.findByIdAndUpdate(mensaj.id, objeUpdate, {
        new: true,
      });
      res.json({ UserMenss: CreateUser.mensajes });
      console.log(CreateUser.mensajes);
    }
  } catch (error) {
    console.log(error);
  }
};

export default MensajesCntroll;
