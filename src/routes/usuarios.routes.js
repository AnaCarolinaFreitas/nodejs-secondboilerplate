import { Router } from "express";
import UsersRepository from "../models/users/Usersrepository.js";

const usuariosRoutes = Router();

const userslist = new UsersRepository();


// Rota para listar todos os usuarios
usuariosRoutes.get("/", (req, res) => {
  const usuarios = userslist.getAllUsers();
    return res.status(200).json({
        message: usuarios.length == 0 
        ? "Não há usuarios cadastrados"
        : `Total de usuários: ${usuarios.length}`
    });
  });


  //Rota para cadastrar um novo usuário
  usuariosRoutes.post("/", (req, res) => {
    const { name, email, password } = req.body;

    const user = userslist.addUser(name, email, password);

    return res.status(201).json({
      message: "Usuário cadastrado com sucesso",
      user,
    });
  });

  // Rota para buscar um usuário pelo seu id
usuariosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const user = userslist.getUserById(id);

    if (!user) {
      return res.status(404).json({
        message: `Usuário com id ${id} não encontrado`,
      });
    }

    return res.status(200).json({
      message: `Usuário com id ${id} encontrado`,
      user,
    });

});

usuariosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = userslist.updateUser(id, name, email, password);

    if (!user) {
      return res.status(404).json({
        message: `Usuário com id ${id} não encontrado`,
      });
    }

    return res.status(200).json({
      message: `Usuário com id ${id} atualizado`,
      user,
    });
});

usuariosRoutes.delete("/:id", (req, res) => {
    
});


export default usuariosRoutes;