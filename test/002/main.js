// Função para verificar o modo de cor e atualizar a página
function verificarModoDeCor() {

    const cores = {
        lightBackgrondColor: "#F5F5F7",
        lightSectionColor: "#FFFFFF",
        lightTextColor: "#000000",

        darkBackgrondColor: "#262626",
        darktSectionColor: "#303030",
        darkTextColor: "#FFFFFF"
    };

    const titulo = document.querySelector('#texto_titulo');
    const paragrafo = document.querySelector('#texto_paragrafo');
    const mySection = document.querySelector('.my-section');
    const myBtn = document.querySelector(".my-btn");

    const lightTheme = window.matchMedia('(prefers-color-scheme: light)');
    const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    let browserTheme = null;

    if ((lightTheme && darkTheme).matches) {
        browserTheme = "DARK";
        console.log("modo: " + browserTheme);

        //Mudando texto
        titulo.textContent = ("Detecção de Modo " + browserTheme);
        paragrafo.textContent = ("Agora estamos no modo " + browserTheme);

        //Mudando cores
        document.body.style.backgroundColor = cores.darkBackgrondColor;
        mySection.style.backgroundColor = cores.darktSectionColor;
        titulo.style.color = cores.darkTextColor;
        paragrafo.style.color = cores.darkTextColor;

        myBtn.style.color = '#7243FA';
        myBtn.style.borderColor = '#7243FA';
        //myBtn.style.backgroundColor = '#FFFFFF';
        myBtn.style.backgroundColor = cores.darktSectionColor;


        // Define o estilo para o hover no modo escuro
        myBtn.addEventListener('mouseenter', () => { myBtn.style.backgroundColor = 'blue'; });

        // Define o estilo para quando o mouse sai no modo escuro
        myBtn.addEventListener('mouseleave', () => { myBtn.style.backgroundColor = 'red'; });


        document.body.style.transition = '0.5s ease';
        paragrafo.style.transition = '1s ease';


    } else {
        browserTheme = "LIGHT";
        console.log("modo : " + browserTheme);

        titulo.textContent = ("Detecção de Modo " + browserTheme);
        paragrafo.textContent = ("Agora estamos no modo " + browserTheme);

        //Mudando cores
        document.body.style.backgroundColor = cores.lightBackgrondColor;
        mySection.style.backgroundColor = cores.lightSectionColor;
        titulo.style.color = cores.lightTextColor;
        paragrafo.style.color = cores.lightTextColor;

        myBtn.style.color = '';
        myBtn.style.borderColor = '';
        myBtn.style.backgroundColor = '';

        // Define o estilo para o hover no modo escuro
        myBtn.addEventListener('mouseenter', () => { myBtn.style.backgroundColor = ''; });

        // Define o estilo para quando o mouse sai no modo escuro
        myBtn.addEventListener('mouseleave', () => { myBtn.style.backgroundColor = ''; });

        document.body.style.transition = '0.5s ease';
        paragrafo.style.transition = '1s ease';

    }
}

// Chamando a função para verificar o modo de cor quando a página carrega
verificarModoDeCor();

// Registrando um ouvinte de eventos para reagir a alterações no modo de cor
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', verificarModoDeCor);