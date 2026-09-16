async function logar() {

    const usuario = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    try {

       const resposta = await fetch("http://localhost:3000/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                usuario: usuario,
                senha: senha
            })

        });

        const dados = await resposta.json();

        if (dados.sucesso) {

            alert("Login realizado com sucesso!");

            localStorage.setItem("usuario", dados.usuario);
            localStorage.setItem("tipo", dados.tipo);

          
            window.location.href = "index.html";

        } else {

            alert(dados.mensagem);

        }

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com o servidor!");

    }
}


function cancelar() {

    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";

}