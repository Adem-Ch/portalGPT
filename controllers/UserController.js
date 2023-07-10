const User = require("../models/User");

const userController = {
  // Получить список всех пользователей
  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Ошибка сервера" });
    }
  },

  // Создать нового пользователя
  createUser: async (req, res) => {
    //console.log(req);

    const { name, email, password } = req.query;

    /*
    try {
      require.resolve("express");
      console.log("Модуль подключен");
    } catch (error) {
      console.log("Модуль не найден");
    }
*/
    try {
      const user = await User.create({
        name,
        email,
        password,
      });

      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Ошибка сервера" });
    }
  },
  /*
  // Получить информацию о конкретном пользователе по его ID
  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Ошибка сервера" });
    }
  },

  // Обновить информацию о пользователе
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const updatedUser = await User.update(
        {
          name,
          email,
          password,
        },
        {
          where: { id },
        }
      );

      if (updatedUser[0] === 0) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      res.json({ message: "Пользователь успешно обновлен" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Ошибка сервера" });
    }
  },

  // Удалить пользователя
  deleteUser: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedUser = await User.destroy({
        where: { id },
      });

      if (deletedUser === 0) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      res.json({ message: "Пользователь успешно удален" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Ошибка сервера" });
    }
  },
  */
};

module.exports = userController;
