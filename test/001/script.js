function loadOla() {
    let timeTransion = 700;
    let timeDelay = 3000;
    // Selecione o elemento iframe
    const iframe = document.getElementById("preloadFrame");

    // Aguarde o evento "load" do documento principal (seu site principal)
    window.addEventListener("load", () => {
        // Defina um atraso mínimo de 1 segundo antes de ocultar o iframe
        setTimeout(() => {
            // Defina um efeito de transição suave (pode personalizar a animação aqui)
            iframe.style.transition = "opacity 0.5s ease";
            // Oculte o iframe definindo a opacidade para 0
            iframe.style.opacity = "0";
            // Aguarde a conclusão da transição antes de remover o elemento do DOM
            setTimeout(() => {
                iframe.remove();
            }, timeTransion); // Tempo correspondente à duração da transição (0.5s)
        }, timeDelay); // Atraso mínimo de 1 segundo antes de começar a ocultar
    });
}

loadOla();