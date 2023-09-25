import { CheckBrowserTheme } from './CheckBrowserTheme.js';

class Main {
    constructor() {
        this.cores = new CheckBrowserTheme();
        this.init();
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