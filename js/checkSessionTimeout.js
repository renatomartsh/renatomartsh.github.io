function checkSessionTimeout(){

    const loginTime = sessionStorage.getItem("loginTime");

    if(!loginTime){
        logout();
        return;
    }

    const now = Date.now();

    const LIMIT = 30 * 60 * 1000;

    if(now - loginTime > LIMIT){

        alert("Sessão expirada");

        logout();
    }
}
