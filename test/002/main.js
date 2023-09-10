// Função para verificar o modo de cor e atualizar a página
function verificarModoDeCor() {
    
    let browserTheme = null;
    const tagId = '#modoTexto';
    const modoTexto = document.querySelector(tagId);
    
    const lightTheme = window.matchMedia('(prefers-color-scheme: light)');
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');

    if ((lightTheme && darkTheme).matches) {
        
        browserTheme = "dark";

        // fazer modificações via o DOM
        console.log("modo: " + browserTheme)
    } else {
        // fazer modificações via o DOM
        browserTheme = "light";
        console.log("modo : " + browserTheme)
    }
}

// Chamando a função para verificar o modo de cor quando a página carrega
verificarModoDeCor();

// Registrando um ouvinte de eventos para reagir a alterações no modo de cor
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', verificarModoDeCor);