const form = document.getElementById('form-exercicio');

let formEValido = false;


function formValidado (CampA,CampB) {
    return CampB > CampA;
}


form.addEventListener('submit', function(e) {    
    e.preventDefault();

    const CampA = document.getElementById('campo-a').value;
    const CampB = document.getElementById('campo-b').value;
    const mensagemSucesso = `Parabéns! <b>${CampB}</b> é maior que <b>${CampA}</b>`;
    const mensagemErro = `Que pena, <b>${CampA}</b> é igual ou menor que <b>${CampB}</b>. Favor tentar novamente. `;
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemErro = document.querySelector('.error-message')

    formEValido = formValidado(CampA,CampB);

    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'inline';
        document.querySelector('.error-message').style.display = 'none';

        CampA.value = ' ';
        CampB.value = ' ';        
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'inline';
        document.querySelector('.error-message').style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
} )