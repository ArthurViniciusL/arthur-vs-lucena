async function readJson() {
    try {
        const JSON_FILE = await fetch('color_palette.json');

        if (!JSON_FILE.ok) {
            throw new Error('Erro ao carregar o arquivo JSON de cores.');
        }

        return await JSON_FILE.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}


async function changeThemeColor() {

    const CORES = await readJson();

    // indentificando o tema do sistema
    let browserTheme = null;
    const LIGHT_THEME = window.matchMedia('(prefers-color-scheme: light)');
    const DARK_THEME = window.matchMedia('(prefers-color-scheme: dark)');

    // lendo componentes
    const TITLE_NAME = document.querySelector('#title_my_name');
    const TITLE_ABOUT = document.querySelector('#title_about');
    const TEXT_ABOUT = document.querySelectorAll('p');
    const BTN_CV = document.querySelector('.btn-cv');
    // getElementsByTagName retorna uma lista de atributos:
    const TAG_SECTION = document.getElementsByTagName('section');

    if ((LIGHT_THEME && DARK_THEME).matches) {
        browserTheme = 'dark mode';

        // alterando cores dos componentes
        document.body.style.backgroundColor = CORES.darkBackgrondColor;
        for (let i = 0; i < TAG_SECTION.length; i++) {
            TAG_SECTION[i].style.backgroundColor = CORES.darktSectionColor;
        }
        TITLE_NAME.style.color = CORES.darkTextColor;
        TEXT_ABOUT.style.color = CORES.darkTextColor;

        BTN_CV.addEventListener('mouseenter', () => {
            BTN_CV.style.borderColor = '';
            BTN_CV.style.color = '';
            BTN_CV.style.backgroundColor = '';
        });

        BTN_CV.addEventListener('mouseleave', () => {
            BTN_CV.style.borderColor = '';
            BTN_CV.style.color = '';
            BTN_CV.style.backgroundColor = '';
        });



    } else {
        browserTheme = 'light mode';

        //zerando mudancas do dark mode
        document.body.style.backgroundColor = CORES.lightBackgrondColor;
        for (let i = 0; i < TAG_SECTION.length; i++) {
            TAG_SECTION[i].style.backgroundColor = cores.lightSectionColor; // Define a cor de fundo para azul para cada elemento
        }
        TITLE_NAME.style.color = CORES.lightextColor;
        TEXT_ABOUT.style.color = CORES.lightTextColor;

        BTN_CV.addEventListener('mouseenter', () => {
            BTN_CV.style.borderColor = '';
            BTN_CV.style.color = '';
            BTN_CV.style.backgroundColor = '';
        });

        BTN_CV.addEventListener('mouseleave', () => {
            BTN_CV.style.borderColor = '';
            BTN_CV.style.color = '';
            BTN_CV.style.backgroundColor = '';
        });

        BTN_CV.addEventListener('mouseenter', () => {
            BTN_CV.style.borderColor = '';
            BTN_CV.style.color = '';
            BTN_CV.style.backgroundColor = '';
        });

        BTN_CV.addEventListener('mouseleave', () => {
            BTN_CV.style.borderColor = '';
            BTN_CV.style.color = '';
            BTN_CV.style.backgroundColor = '';
        });
    }

    console.log(">>> " + browserTheme);
}

changeThemeColor();
// ouvinte de eventos para reagir a alterações no modo de cor
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeThemeColor);