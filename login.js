// Lista simulada de usuários (substitui o banco de dados do servidor)
const usuariosCadastrados = [
    { usuario: "CAMILA", senha: "123", tipo: "administrador" },
    { usuario: "PROFESSOR", senha: "123", tipo: "comum" }
];

async function logar() {
    const usuarioDigitado = document.getElementById("login").value.trim();
    const senhaDigitada = document.getElementById("senha").value.trim();

    if (!usuarioDigitado || !senhaDigitada) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Procura o usuário e a senha na lista local
    const usuarioEncontrado = usuariosCadastrados.find(
        u => u.usuario === usuarioDigitado && u.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");

        // Salva os dados da sessão localmente no navegador
        localStorage.setItem("usuario", usuarioEncontrado.usuario);
        localStorage.setItem("tipo", usuarioEncontrado.tipo);

        // Redireciona para a página principal
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function cancelar() {
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
}