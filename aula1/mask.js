
var input_tel = document.getElementById("telefone");
input_tel.addEventListener('keyup', mask_tel);

var input_cpf = document.getElementById("cpf");
input_cpf.addEventListener('keyup', mask_cpf);

function mask_tel(e) {

   var caracter = e.target.value.replace(/\D/g,"");
   caracter = caracter.replace(/^(\d\d)(\d)/g,"($1) $2"); /* (31) */
   caracter = caracter.replace(/(\d{5})(\d)/,"$1-$2"); /* 00000-0000 */

   e.target.value = caracter;

}

function mask_cpf(e) {

    var caracter = e.target.value.replace(/\D/g,"");
    caracter = caracter.replace(/(\d{3})(\d)/,"$1.$2");
    caracter = caracter.replace(/(\d{3})(\d)/,"$1.$2");
    caracter = caracter.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    
    e.target.value = caracter;

}