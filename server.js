const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const PORT = 3000;



app.use(cors());
app.use(express.json());


app.use(express.static("public"));



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "portfolio"
});




db.connect((erro) => {

    if (erro) {
        console.log("❌ Erro ao conectar com o MySQL:");
        console.log(erro.message);
        return;
    }

    console.log("✅ MySQL conectado com sucesso!");

});




app.post("/login", (req, res) => {

    const { usuario, senha } = req.body;

  
    if (!usuario || !senha) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha o usuário e a senha!"
        });

    }
  
    const sql = `
        SELECT id, usuario, senha, tipo
        FROM usuarios
        WHERE usuario = ? AND senha = ?
    `;

    db.query(sql, [usuario, senha], (erro, resultado) => {

    
        if (erro) {

            console.log("❌ Erro ao consultar o banco:");
            console.log(erro.message);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

    
        if (resultado.length === 0) {

            return res.status(401).json({
                sucesso: false,
                mensagem: "Usuário ou senha incorretos!"
            });

        }

     
        const usuarioEncontrado = resultado[0];

        console.log("✅ Login realizado!");
        console.log("Usuário:", usuarioEncontrado.usuario);
        console.log("Tipo:", usuarioEncontrado.tipo);

        return res.json({
            sucesso: true,
            mensagem: "Login realizado com sucesso!",
            usuario: usuarioEncontrado.usuario,
            tipo: usuarioEncontrado.tipo
        });

    });

});




app.listen(PORT, () => {

    console.log("=================================");
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log("=================================");

});