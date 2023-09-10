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

async function changeThemeColor() {

    const CORES = await readJson();

    // indentificando o tema do sistema
    let browserTheme = null;
    const LIGHT_THEME = window.matchMedia('(prefers-color-scheme: light)');
    const DARK_THEME = window.matchMedia('(prefers-color-scheme: dark)');

    // lendo componentes
    const MY_IMG = document.querySelector('#img-perfil');
    const TITLE_NAME = document.querySelector('#title_my_name');
    const ICON_TITLE_ABOUT = document.querySelector("#yellow_ball");
    const TITLE_ABOUT = document.querySelector('#title_about');
    const TEXT_ABOUT = document.querySelector('.container-bout-text');
    const BTN_CV = document.querySelector('.btn-cv');
    // getElementsByTagName retorna uma lista de atributos:
    const TAG_SECTION = document.getElementsByTagName('section');

    if ((LIGHT_THEME && DARK_THEME).matches) {
        browserTheme = 'dark mode';

        // alterando CORES dos componentes
        document.body.style.backgroundColor = CORES.DARK.backgrondColor;
        for (let i = 0; i < TAG_SECTION.length; i++) {
            TAG_SECTION[i].style.backgroundColor = CORES.DARK.sectionColor;
        }
        MY_IMG.style.borderColor = CORES.DARK.fillColorArthur;
        TITLE_NAME.style.color = CORES.DARK.textColor;
        ICON_TITLE_ABOUT.style.backgroundColor = CORES.DARK.fillColorArthur;
        TITLE_ABOUT.style.color = CORES.DARK.textColor;
        TEXT_ABOUT.style.color = CORES.DARK.textColor;
        BTN_CV.style.borderColor = CORES.BTN.DARK.fillColorArthur;
        BTN_CV.style.color = CORES.BTN.DARK.leaveBtnTextColor;
        BTN_CV.style.backgroundColor = CORES.BTN.DARK.leaveBtnBackgroundColor;

        BTN_CV.addEventListener('mouseenter', () => {
            BTN_CV.style.borderColor = CORES.BTN.DARK.fillColorArthur;
            BTN_CV.style.color = CORES.BTN.DARK.enterBtnTextColor;
            BTN_CV.style.backgroundColor = CORES.BTN.DARK.enterBtnBackgroundColor;
        });

        BTN_CV.addEventListener('mouseleave', () => {
            BTN_CV.style.borderColor = CORES.BTN.DARK.fillColorArthur;
            BTN_CV.style.color = CORES.BTN.DARK.leaveBtnTextColor;
            BTN_CV.style.backgroundColor = CORES.BTN.DARK.leaveBtnBackgroundColor;
        });


    } else {
        browserTheme = 'light mode';

        // voltando para o modo light
        document.body.style.backgroundColor = CORES.LIGHT.backgrondColor;
        for (let i = 0; i < TAG_SECTION.length; i++) {
            TAG_SECTION[i].style.backgroundColor = CORES.LIGHT.sectionColor;
        }
        MY_IMG.style.borderColor = CORES.LIGHT.fillColorArthur;
        TITLE_NAME.style.color = CORES.LIGHT.textColor;
        ICON_TITLE_ABOUT.style.backgroundColor = CORES.LIGHT.fillColorArthur;
        TEXT_ABOUT.style.color = CORES.LIGHT.textColor;
        BTN_CV.style.borderColor = CORES.BTN.LIGHT.fillColorArthur;
        BTN_CV.style.color = CORES.BTN.LIGHT.leaveBtnTextColor;
        BTN_CV.style.backgroundColor = CORES.BTN.LIGHT.leaveBtnBackgroundColor;

        BTN_CV.addEventListener('mouseenter', () => {
            BTN_CV.style.borderColor = CORES.BTN.LIGHT.fillColorArthur;
            BTN_CV.style.color = CORES.BTN.LIGHT.enterBtnTextColor;
            BTN_CV.style.backgroundColor = CORES.BTN.LIGHT.enterBtnBackgroundColor;
        });

        BTN_CV.addEventListener('mouseleave', () => {
            BTN_CV.style.borderColor = CORES.BTN.LIGHT.fillColorArthur;
            BTN_CV.style.color = CORES.BTN.LIGHT.leaveBtnTextColor;
            BTN_CV.style.backgroundColor = CORES.BTN.LIGHT.leaveBtnBackgroundColor;
        });

        console.log(">>> " + browserTheme);
    }
}

changeThemeColor();
// ouvinte de eventos para reagir a alterações no modo de cor
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeThemeColor);