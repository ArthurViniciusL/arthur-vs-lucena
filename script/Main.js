function changeThemeColor(theme, color) {

    // coletando atributos
    const TAG_SECTION = document.getElementsByTagName('section');
    const MY_IMG = document.querySelector('#img-perfil');
    const TITLE_NAME = document.querySelector('#title_my_name');
    const ICON_TITLE_ABOUT = document.querySelector("#yellow_ball");
    const TITLE_ABOUT = document.querySelector('#title_about');
    const TEXT_ABOUT = document.querySelector('.container-bout-text');
    const BTN_CV = document.querySelector('.btn-cv');

    // setando alterações
    document.body.style.transition = `background-color ${color.timeTransition} ease, color ${color.timeTransition} ease`;

    document.body.style.backgroundColor = color[theme].backgrondColor;
    for (let i = 0; i < TAG_SECTION.length; i++) {
        TAG_SECTION[i].style.backgroundColor = color[theme].sectionColor;
        TAG_SECTION[i].style.transition = `background-color ${color.timeTransition} ease, color ${color.timeTransition} ease`;
    }

    MY_IMG.style.borderColor = color[theme].fillColorArthur;
    TITLE_NAME.style.color = color[theme].textColor;
    ICON_TITLE_ABOUT.style.backgroundColor = color[theme].fillColorArthur;
    TITLE_ABOUT.style.color = color[theme].textColor;
    TEXT_ABOUT.style.color = color[theme].textColor;
    BTN_CV.style.borderColor = color.BTN[theme].fillColorArthur;
    BTN_CV.style.color = color.BTN[theme].leaveBtnTextColor;
    BTN_CV.style.backgroundColor = color.BTN[theme].leaveBtnBackgroundColor;

    // setando estilos do btn-cv
    BTN_CV.addEventListener('mouseenter', () => {
        BTN_CV.style.borderColor = color.BTN[theme].fillColorArthur;
        BTN_CV.style.color = color.BTN[theme].enterBtnTextColor;
        BTN_CV.style.backgroundColor = color.BTN[theme].enterBtnBackgroundColor;
    });

    BTN_CV.addEventListener('mouseleave', () => {
        BTN_CV.style.borderColor = color.BTN[theme].fillColorArthur;
        BTN_CV.style.color = color.BTN[theme].leaveBtnTextColor;
        BTN_CV.style.backgroundColor = color.BTN[theme].leaveBtnBackgroundColor;
    });
}
async function readJson() {
    try {
        const JSON_FILE = await fetch('script/style_attributes.json');

        if (!JSON_FILE.ok) {
            throw new Error('Erro ao carregar o arquivo JSON de CORES.');
        }

        return await JSON_FILE.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function checkBrowserTheme() {

    const COR_JSON = await readJson();
    const DARK_THEME = window.matchMedia('(prefers-color-scheme: dark)');

    let browserTheme = null;

    if (DARK_THEME.matches) {
        browserTheme = 'dark mode';
        changeThemeColor('DARK', COR_JSON);

    }

    else {
        browserTheme = 'light mode';
        changeThemeColor('LIGHT', COR_JSON);
    }

    console.log(">>> " + browserTheme);
}

checkBrowserTheme();

// Ouvinte de eventos para reagir a alterações no modo de cor
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkBrowserTheme);
