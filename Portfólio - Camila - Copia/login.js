function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "admin@senai" && senha === "123") {

        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    }
    else if (login == "admin@senai2" && senha != "123") {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    }
    else {
        alert("Credenciais inválidas!");
    }
}
