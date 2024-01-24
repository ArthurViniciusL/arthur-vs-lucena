import { CheckBrowserTheme } from './CheckBrowserTheme.js';

class Main {
    constructor() {
        this.cores = new CheckBrowserTheme();
        this.pageLoader();
        this.init();
    }

    async pageLoader() {
        this.elementIframe = document.getElementById('loader');
        var timeOut = 4000;
        setTimeout(() => {
            this.elementIframe.style.display = 'none';
        }, timeOut);
    }

    async init() {
        this.cores.getBrowserTheme();

        // Ouvinte de eventos para reagir a alterações no modo de cor
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            this.cores.getBrowserTheme();
        });
    }
}

// Inicie a classe Main quando a página estiver pronta.
document.addEventListener('DOMContentLoaded', function () {
    const loadMain = new Main();
});
// Ou:
// document ...() => { const loadMain = new Main(); });