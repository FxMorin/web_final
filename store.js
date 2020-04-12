
window.onload = function(){
    const canvas = document.getElementById("virusDesign");
    const ctx = canvas.getContext('2d');
    generateVirus(canvas,ctx);
};
let resizeTimeoutAll;
function onResizeAll () { //Because you said responsive, I had to add this entire part
  resizeTimeoutAll = window.clearTimeout(resizeTimeoutAll);
  resizeTimeoutAll = window.setTimeout(afterResizeAll, 750);
}
function afterResizeAll() {
  window.requestAnimationFrame(render);
}
window.addEventListener('resize', onResizeAll);

//var severity = (Math.random()*10).toFixed(1);





// ========================================================
//            CREATING VIRUSES RANDOMLY!!!
// ========================================================
// This took me like 20+ hours, rip
// - Fx Morin


function generateVirus(canvas,ctx) {
  const ParticleCount = (Math.random()*700)+250; // Particle count for virus shell (250-950)
  const ParticleSize = 1 + parseFloat((Math.random()*2).toFixed(1));
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  if (window.devicePixelRatio > 1) { //Might remove this, rarly needed
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  }
  let width = canvas.clientWidth;
  let height = canvas.clientHeight;
  let rotation = 0; // virus rotation
  let particles = []; // all particles
  let randomColor = setRandomColor();
  let randomColorLines = setRandomColor();

  let VirusSize = width * 0.7; // Virus Size
  let CoreSize = setCoreSize();
  let CenterZ = -VirusSize; // Virus Center Z
  let CanvasCenterX = width / 2; // Center X
  let CanvasCenterY = height / 2; // Center Y
  let FOV = width * 0.8; //Field of View
  let hasLines = false;
  if (CoreSize < 60) {
    if (Math.random() >= 0.5){
      //hasLines = true;
    }
  }

  class Particle {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;

      this.sizeX = 0;
      this.sizeY = 0;
      this.sizeT = 0;
    }
    // Simple 3D to 2D math
    project() {
      let cos = Math.cos(45);
      let sin = Math.sin(45);
      const rotX = cos * this.x + sin * (this.z - CenterZ);
      const rotZ = -sin * this.x + cos * (this.z - CenterZ) + CenterZ;
      this.sizeT = FOV / (FOV - rotZ);
      this.sizeX = (rotX * this.sizeT) + CanvasCenterX;
      this.sizeY = (this.y * this.sizeT) + CanvasCenterY;
    }
    // Place particles on canvas
    draw() {
      this.project();
      //if (this.sizeT > 0.6-(65/CoreSize)) {
        if (hasLines && this.sizeT > 0.9) { //Didn't have time to finish the line system
          let xxy = 1;
          let xyy = 1;
          if (this.sizeX < CanvasCenterX){
            xxy = -1;
          }
          if (this.sizeY < CanvasCenterY){
            xyy = -1;
          }
          ctx.fillStyle = randomColorLines;
          ctx.moveTo(this.sizeX, this.sizeY);
          ctx.lineTo(CanvasCenterX+(this.sizeX*xxy)/(CoreSize/2), CanvasCenterY+(this.sizeY*xyy)/(CoreSize/2));
          ctx.stroke();
        }
        ctx.fillStyle = randomColor;
        ctx.beginPath();
        ctx.arc(this.sizeX, this.sizeY, ParticleSize * this.sizeT, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      //}
    }
  }
  function generateCore() {
    ctx.fillStyle = setRandomColor();
    ctx.beginPath();
    ctx.arc(CanvasCenterX, CanvasCenterY, CoreSize, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  function setCoreSize() {
    size = (width * 0.7) * Math.random();
    size = size-30;
    if (size > VirusSize-46.8){
      size = VirusSize-46.8;
    } else if (size < 10) {
      size = 10;
    }
    return size;
  }

  function createParticles() {
    // Create a new particle based on the amount needed
    for (let i = 0; i < ParticleCount; i++) {
      const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
      const phi = Math.acos((Math.random() * 2) - 1); // Random value between [-1, 1]

      // Calculate the [x, y, z] coordinates of the particle along the globe
      const x = VirusSize * Math.sin(phi) * Math.cos(theta);
      const y = VirusSize * Math.sin(phi) * Math.sin(theta);
      const z = (VirusSize * Math.cos(phi)) + CenterZ;
      particles.push(new Particle(x, y, z));
    }
  }

  function render(){
    generateCore();
    for (var i = 0; i < particles.length; i++) { //Draw all particles
      particles[i].draw();
    }
    //window.requestAnimationFrame(render);
  }
  function setRandomColor(){ //Gives random number between 1 and 9
    let final = "#";
    for (let i = 0; i < 6; i++) {
      final += (Math.floor(Math.random()*8)+1).toString();
    }
    return final
  }

  createParticles();
  window.requestAnimationFrame(render);
}
