async function login() {

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    const response = await fetch("data/users.json");
    const users = await response.json();

    const found = users.find(u =>
        u.user === user &&
        u.password === pass
    );

    if(found){

        // cria "sessão"
        sessionStorage.setItem("auth", "true");

        // salva horário login
        sessionStorage.setItem("loginTime", Date.now());

        window.location.href = "index.html";

    } else {
        alert("Login inválido");
    }
}