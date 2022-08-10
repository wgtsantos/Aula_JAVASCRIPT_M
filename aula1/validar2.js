function valid2(){

    var nome = document.getElementById("nome").value == "";
    var telefone = document.getElementById("telefone").value == ""; 
    var senha = document.getElementById("senha").value == "";
    var vsenha = document.getElementById("senha").value;
    var conf_senha = document.getElementById("conf_senha").value != vsenha;

    if(nome) {
        document.getElementById("erro_nome").innerHTML =
         "O campo nome não foi informado";
         return false;
    } else {
        document.getElementById("erro_nome").innerHTML = "";
    }
    if(telefone) {
        document.getElementById("erro_tel").innerHTML =
        "O campo telefone não foi informado";
        return false;
    } else {
        document.getElementById("erro_tel").innerHTML = "";
    }
    if(senha) {
        document.getElementById("erro_senha").innerHTML =
        "O campo senha não foi informado";
        return false;
    } else {
        document.getElementById("erro_senha").innerHTML = "";
    }
    if(conf_senha) {
        document.getElementById("erro_conf_senha").innerHTML =
        "As senhas não conferem!";
        return false;
    } else {
        document.getElementById("erro_conf_senha").innerHTML = "";
    }
}