const valide = {
    senha(senha){
            if(senha.length >= 8 && senha.length <= 255){
                return true;
            }else{
                return false;
            }
    },
    email(email){
        const reg = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;
        return reg.test(email) && email.length <= 320;
    },
    nome(nome){
        if(nome != '' && nome.length <= 255){
            return true;
        }else{
            return false;
        }
    },
    sobrenome(sobrenome){
        if(sobrenome != '' && sobrenome.length <= 35){
            return true;
        }else{
            return false;
        }
    },
    credencial(credencial){
        if(credencial.length == 8){
            return true;
        }else{
            return false;
        }
    },
    urlArtigo(urlArtigo){
        if(urlArtigo.focus()){
            alert('Utilize - como espaços ' + 'Exemplo: como-fazer-um-site-em-html5');
        }else if(urlArtigo = /^[a-zA-Z-0-9]+$/){
            return true;
        }
    }
}
