const User = require("../../models").Users;
const bcrypt = require("bcrypt");
userController = {};


userController.get = async (req, res) => {
  try {
    let data = await User.findAll();
    return res.status(200).json({
      data,
      message: "successful users",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

userController.post = async (req, res) => {
  const {
    id_role,
    name,
    last_name,
    nit,
    password,
    email  
  } = req.body;
  
  try {
    await User.create({
      id_role,
      name,
      last_name,
      nit,
      password,
      email   
    });
    return res.status(200).json({
      message: "successfully created user",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

userController.update = async (req, res) => {
  const {
    id_role,
    name,
    last_name,
    nit,
    password,
    email,
    passwordDefault,
  } = req.body;
  const access = passwordDefault == password ?  passwordDefault : await bcrypt.hash(password, 12);
  try {
    await User.update(
      {
        id_role,
        name,
        last_name,
        nit,
        password: access,
        email
      },
      {
        where: {
          nit
        },
      }
    );
    return res.status(200).json({
      message: "user successfully updated",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

userController.delete = async (req, res) => {
  const id = req.params.id;
  try {
    await User.destroy({
      where: {
        id
      },
    });
    return res.status(200).json({
      message: "user successfully removed",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = userController;
