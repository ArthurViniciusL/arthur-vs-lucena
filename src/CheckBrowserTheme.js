import { ChangeColors } from "./ChangeColors.js";

export class CheckBrowserTheme extends ChangeColors {

    constructor() {
        super();
    }

    async readStyleJson() {
        try {
            const JSON_FILE = await fetch('src/style_attributes.json');

            if (!JSON_FILE.ok) {
                throw new Error('Erro ao carregar o arquivo JSON de CORES.');
            }

            return await JSON_FILE.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getBrowserTheme() {

        var browserTheme = null;
        const COR_JSON = await this.readStyleJson();
        const DARK_THEME = window.matchMedia('(prefers-color-scheme: dark)');

        if (DARK_THEME.matches) {
            browserTheme = 'dark mode';
            this.setBrowserTheme('DARK', COR_JSON);
        } else {
            browserTheme = 'light mode';
            this.setBrowserTheme('LIGHT', COR_JSON);
        }

        console.log(">>> " + browserTheme);
    }

    setBrowserTheme(theme, color) {
        this.animateTheTransition();
        this.changeBackgroundColor(color[theme].backgrondColor);
        this.changeSectionColor(color[theme].sectionColor, color[theme].borderColor);
        this.changeFillColor(color[theme].fillColorArthur);
        this.changeFontColor(color[theme].textColor);
        this.changeBtnCv(theme, color);

    }
}
