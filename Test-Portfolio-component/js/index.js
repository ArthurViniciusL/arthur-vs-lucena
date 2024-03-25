


async function buildHtml() {

    const iconDirectory = 'img/image-round-symbolic.svg';
    const getTextsJson = await fetch('https://jsonplaceholder.typicode.com/posts');
    const textJson = await getTextsJson.json();

    let htmlContent = '';
    for (let i = 0; i < 100; i++) {
        let title = textJson[i].title;
        let subtitle = textJson[i].body;
        htmlContent += `
        <div class="card-container">
            <div class="cards-projects">
            <div class="icon-container">
                <img id="icon_project" src="${iconDirectory}" alt="" srcset="">  
            </div>
                <div class="text-container">
                    <div class="text-content">
                        <div class="container-title">
                            <h2 id="project-name">${i} - ${title}</h2>
                            <img id="icon_link" src="${iconDirectory}" alt="" srcset="">  
                        </div>
                        <p id="project-description">${subtitle.substring(0, 200)}...</p>
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