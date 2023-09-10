const helloline = document.getElementById("helloline");

let pathLength = helloline.getTotalLength();
// console.log(pathLength)
helloline.setAttribute("stroke-dasharray", pathLength);
helloline.setAttribute("stroke-dashoffset", pathLength);
console.log(helloline.innerHTML)
helloline.innerHTML = `<animate attributeName="stroke-dashoffset" begin='1s' dur="5s" to="0" fill="freeze" />`;