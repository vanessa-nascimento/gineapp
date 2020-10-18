var storage = [];
var btnForm = document.querySelector(".btn-enviar");

btnForm.addEventListener("click", function(e) {
    //event.preventDefault();
    var form = document.querySelector("#form-cadastro");
    

    
    getValueForm(form);

    form.reset();

});

function getValueForm(form) {

    var formCadastro = {
        nome: form.inputNome.value,
        email: form.inputEmail.value,
        senha: form.inputSenha.value,
        genero: form.inputGenero.options[inputGenero.selectedIndex].value,
    }

    return formCadastro;
}

function registarUsuario() {

}