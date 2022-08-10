function valid(){

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value; 
    var senha = document.getElementById("senha").value;
    var conf_senha = document.getElementById("conf_senha").value;

    if(nome == "") {
        alert("O campo nome não foi informado!");
        return false;
    }
    if(telefone == "") {
        alert("O campo telefone não foi digitado");
        return false;
    }
    if(senha == "") {
        alert("O campo senha não foi informado!");
        return false;
    }

    if(senha != conf_senha) {
        alert("Senhas não Conferem!!")
        return false;
    }
}