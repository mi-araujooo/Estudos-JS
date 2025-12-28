const form = document.querySelector('form');
const erroDiv = document.querySelector('.notific_erro');


form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.getElementById('pnome').value;
    const sobrenome = document.getElementById('snome').value;
    const email = document.getElementById('mail').value;
    const senha = document.getElementById('pass').value;
    const confSenha = document.getElementById('pass_2').value;

    if (!nome || !sobrenome || !email || !senha || !confSenha){
        erroDiv.innerText = 'ERRO! Preencha todos os campos!';
        erroDiv.classList.add('ativo');
        setTimeout(() => {
            erroDiv.classList.remove('ativo');
        }, 3000);
    }else if (senha !== confSenha) {
        erroDiv.innerText = 'ERRO! Senhas não conferem!';
        erroDiv.classList.add('ativo');
        setTimeout(() => {
            erroDiv.classList.remove('ativo');
        }, 3000);
    }else{
        const senhaSemEspaco = senha.trim()
        if(senha.length < 4){
            erroDiv.innerText = 'ERRO! A senha precisa de no minimo 5 caracteres!';
            erroDiv.classList.add('ativo');
            setTimeout(() => {
                erroDiv.classList.remove('ativo');
            }, 3000);
        }else if (senhaSemEspaco.length === 0 || senha.includes(" ")){
            erroDiv.innerText = 'ERRO! A senha não pode conter espaços!';
            erroDiv.classList.add('ativo');
            setTimeout(() => {
                erroDiv.classList.remove('ativo');
            }, 3000);
        }else{
        erroDiv.innerText = 'Formulário enviado com sucesso!';
        erroDiv.classList.add('certo');
        setTimeout(() => {
            erroDiv.classList.remove('certo');
            erroDiv.classList.remove('ativo');
            form.reset();
        }, 3000);
        }
    }
})