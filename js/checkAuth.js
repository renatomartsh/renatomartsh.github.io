function checkAuth(){

    const auth = sessionStorage.getItem("auth");

    if(auth !== "true"){

        window.location.href = "login.html";
    }
}