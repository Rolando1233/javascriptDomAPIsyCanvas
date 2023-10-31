const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(190, 140, 70, 0, 2 * Math.PI); // Cabeza más ancha
ctx.fill();

// Cuerpo más ancho
ctx.beginPath();
ctx.moveTo(120, 220);
ctx.quadraticCurveTo(120, 360, 200, 300); // Curva izquierda más ancha
ctx.quadraticCurveTo(280, 400, 260, 130); // Curva derecha más ancha
ctx.quadraticCurveTo(260, 210, 200, 130); // Curva superior más ancha
ctx.quadraticCurveTo(140, 210, 120, 130); // Curva superior izquierda más ancha
ctx.closePath();
ctx.fill();

// Ojos
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(170, 150, 10, 0,  Math.PI * 2, true); // Ojo izquierdo
ctx.fill();
ctx.beginPath();
ctx.arc(215, 150, 10, 0, Math.PI * 2, true); // Ojo derecho
ctx.fill();

// Boca
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(195, 175, 25, 0, Math.PI, false); // Boca
ctx.fill();




ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;
ctx.arc(0, 0, 20, 0, Math.PI, false);
ctx.stroke();
ctx.arc(0, 0, 35, 0, Math.PI, false);
ctx.stroke();
ctx.arc(0, 0, 50, 0, Math.PI, false);
ctx.stroke();


ctx.beginPath();
ctx.fillStyle = 'orange';
ctx.arc(140, 255, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(140, 220, 10, 0, 2 * Math.PI); 
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(130, 250, 5, 0, 2 * Math.PI); 
ctx.fill();
ctx.fillStyle = 'black';
ctx.arc(150, 250, 5, 0, 2 * Math.PI); 
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(140, 260, 15, 0,  Math.PI); 
ctx.fill();



ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(140, 240, 20, 0, Math.PI, true);
ctx.stroke();