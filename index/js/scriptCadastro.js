function recebeValor() {
    var nomeProf = forms.nome.value;
    var emailProf = forms.email.value;
    var senhaProf = forms.senha.value;
    var cSenhaProf = forms.cSenha.value;



    if (nomeProf == "") {
        alert('Preencha o campo nome');
        forms.nome.focus();
        return false;
    }
    if (emailProf == "" || email.indexOf('@') == -1) {
        alert('Preencha o campo email');
        forms.email.focus();
        return false;
    }
    if (senhaProf == "") {
        alert('Preencha o campo senha');
        forms.senha.focus();
        return false;
    }
    if (cSenhaProf == "") {
        alert('Preencha o campo Confirmacao senha');
        forms.cSenha.focus();
        return false;
    }


    location.href = "designLogin.html";

}

function passaLogin() {
    location.href = "designLogin.html";

}