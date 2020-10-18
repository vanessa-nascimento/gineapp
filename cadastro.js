document.getElementById('alerta-erro').style.display = 'none';

function getValueForm(form) {

    var formCadastro = {
        nome: form.inputNome.value,
        email: form.inputEmail.value,
        senha: form.inputSenha.value,
        genero: form.inputGenero.options[inputGenero.selectedIndex].value,
    }

    return formCadastro;
}

function registrarUsuario() {
    var form = document.querySelector("#form-cadastro");
    var valueForm = getValueForm(form);

    const nome = valueForm.nome;
    const email = valueForm.email;
    const senha = valueForm.senha;
    const genero = valueForm.genero;

    const dataObj = { 
        nome,
        email,
        senha,
        genero
    }

    if (localStorage.getItem('items') === null) {
        // Adicionando um array com um objeto no localstorage
        localStorage.setItem('items', JSON.stringify([dataObj]));
      } else {
        // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
        localStorage.setItem(
          'items',
          // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('items')),
            dataObj
          ])
        );
      }

      window.location.href = "index.html";
}

function cadastroExiste(){
    var form = document.querySelector("#form-login");
    
    const login = form.login.value;
    const senha = form.senha.value;


    JSON.parse(localStorage.getItem('items')).find((e) => {
        if(e.email == login && e.senha == senha){
            window.location.href = "app-inicial.html";
            document.getElementById('alerta-erro').style.display = 'none';
        }
        else{
            document.getElementById('alerta-erro').style.display = 'block';
        }
    });
}
