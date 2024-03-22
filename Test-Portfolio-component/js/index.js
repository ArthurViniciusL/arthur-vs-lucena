const iconDirectory = 'img/image-round-symbolic.svg'

function buildHtml() {
    let htmlContent = '';
    for (let i = 0; i < 10; i++) {
        htmlContent += `
        <div class="card-container">
            <div class="cards-projects">
                <img class="icon-project" src="${iconDirectory}" alt="" srcset="">
                <div class="text-area">
                    <div class="text-content">
                        <div class="container-icon">
                            <h2 id="project-name">${i} - Titulo do projeto</h2>
                            <p id="project-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, ipsa consectetur distinctio exercitationem laboriosam doloremque dolorum? Harum eligendi tempora a iste odio omnis fugiat veritatis dolorem, asperiores aperiam repudiandae ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum repudiandae sunt illo ipsum enim eos maxime, at praesentium dicta a similique veritatis illum hic odit soluta exercitationem est, dolor labore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    document.getElementById("project_card").innerHTML = htmlContent;
}

// function gerarCSS() {
//     let cssRules = {
//         ".card-project": {
//             "background-color": "#f0f0f0",
//             "border": "1px solid #ccc",
//             "padding": "20px",
//             "margin-bottom": "20px",
//             "border-radius": "5px",
//             "box-shadow": "0 4px 8px rgba(0, 0, 0, 0.1)"
//         },
//         ".icon-projet": {
//             "width": "50px",
//             "height": "50px"
//         },
//         "#project-name": {
//             "font-size": "1.2em",
//             "font-weight": "bold",
//             "color": "#333"
//         },
//         "#project-description": {
//             "font-size": "1em",
//             "color": "#666"
//         }
//         // Adicione mais regras CSS conforme necessário
//     };

//     let css = '';
//     for (let selector in cssRules) {
//         css += selector + " {\n";
//         for (let property in cssRules[selector]) {
//             css += "    " + property + ": " + cssRules[selector][property] + ";\n";
//         }
//         css += "}\n";
//     }

//     let style = document.createElement('style');
//     style.type = 'text/css';
//     style.appendChild(document.createTextNode(css));
//     document.head.appendChild(style);
// }

// buildHtml();


document.addEventListener("DOMContentLoaded", () => {
    // gerarCSS() 
    buildHtml();
});