const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const btnCor = document.getElementById("cor");

console.dir(ctx);

var cor = "#0000FF";
btnCor.value = cor;

//circulo (100, 100)

canvas.addEventListener("mousedown", clique)

function clique (e) {
    console.log(e);


    const offsetX = e.offsetX;
    const offsetY = e.offsetY;

    circulo(offsetX, offsetY);
}


function circulo (x,y) {
    const raio = 40;
    cor = btnCor.value;
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidht = 5;
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.stroke();
}

function limpar() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}