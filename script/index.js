function fechaOverlay (){
    menuBar.classList.remove('active');
    sobreposicao.classList.remove('active');
    modoDarkLigth.classList.remove('active-mobile-menu');
    login.classList.remove('active');
    registreSe.classList.remove('active');
} //USADO NA OVERLAY

hamb.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    sobreposicao.classList.toggle('active');
    modoDarkLigth.classList.toggle('active-mobile-menu');
})

modoDarkLigth.addEventListener('click', () => {
    modoDarkLigth.classList.toggle('active');
    corpo.classList.toggle('active-body');
})

loginPage.addEventListener('click', () => {
    sobreposicao.classList.toggle('active');
    login.classList.toggle('active');
});

fecharLogin.addEventListener('click', () => {
    fechaOverlay();
})

cadastro.addEventListener('click', () => {
    registreSe.classList.toggle('active');
    sobreposicao.classList.add('active');
    login.classList.remove('active');
})

abrirLogin.addEventListener('click', () => {
    registreSe.classList.remove('active');
    sobreposicao.classList.add('active');
    login.classList.add('active');
})