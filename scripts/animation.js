var start
var previousTimeStamp
var done = false
var refreshCount = 0
const ctx = document.getElementById('canvas-1').getContext('2d');

// function clock(timeStamp) {
//     refreshCount++
//     const now = new Date();
//     const ctx = document.getElementById('canvas-1').getContext('2d');
//     ctx.save();
//     ctx.clearRect(0, 0, 150, 150);
//     ctx.translate(75, 75);
//     ctx.scale(0.4, 0.4);
//     ctx.rotate(-Math.PI / 2);
//     ctx.strokeStyle = 'black';
//     ctx.fillStyle = 'white';
//     ctx.lineWidth = 8;
//     ctx.lineCap = 'round';

//     // Hour marks
//     ctx.save();
//     for (let i = 0; i < 12; i++) {
//         ctx.beginPath();
//         ctx.rotate(Math.PI / 6);
//         ctx.moveTo(100, 0);
//         ctx.lineTo(120, 0);
//         ctx.stroke();
//     }
//     ctx.restore();

//     // Minute marks
//     ctx.save();
//     ctx.lineWidth = 5;
//     for (i = 0; i < 60; i++) {
//     if (i % 5 !== 0) {
//         ctx.beginPath();
//         ctx.moveTo(117, 0);
//         ctx.lineTo(120, 0);
//         ctx.stroke();
//     }
//     ctx.rotate(Math.PI / 30);
//     }
//     ctx.restore();

//     const sec = now.getSeconds();
//     const min = now.getMinutes();
//     const hr  = now.getHours() % 12;

//     ctx.fillStyle = 'black';

//     // write Hours
//     // math.pi /6 = 1 hora, math.pi / 360 = 1 min, math.pi / 21600 = 1 sec
//     ctx.save();
//     ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
//     ctx.lineWidth = 14;
//     ctx.beginPath();
//     ctx.moveTo(-20, 0);
//     ctx.lineTo(80, 0);
//     ctx.stroke();
//     ctx.restore();

//     // write Minutes
//     ctx.save();
//     ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
//     ctx.lineWidth = 10;
//     ctx.beginPath();
//     ctx.moveTo(-28, 0);
//     ctx.lineTo(112, 0);
//     ctx.stroke();
//     ctx.restore();

//     // Write seconds
//     ctx.save();
//     ctx.rotate(sec * Math.PI / 30);
//     ctx.strokeStyle = '#D40000';
//     ctx.fillStyle = '#D40000';
//     ctx.lineWidth = 6;
//     ctx.beginPath();
//     ctx.moveTo(-30, 0);
//     ctx.lineTo(83, 0);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
//     ctx.stroke();
//     ctx.fillStyle = 'rgba(0, 0, 0, 0)';
//     ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.restore();

//     ctx.beginPath();
//     ctx.lineWidth = 14;
//     ctx.strokeStyle = '#325FA2';
//     ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
//     ctx.stroke();

//     ctx.restore();

//     console.log('timestamp', timeStamp)
//     if(start === undefined) {
//         start = timeStamp   
//     }
//     const elapsed = timeStamp - start
//     console.log('elapsed', elapsed);
//     if (elapsed < 6000){
//         window.requestAnimationFrame(clock);
//         console.log('refresh', refreshCount);
//     }
//     ctx.fillText('Fugaz One font loaded', 200, 100)
//     // if(timeStamp < 6000) {
//     //     window.requestAnimationFrame(clock);
//     // }
// }
  
// // window.requestAnimationFrame(clock);

ctx.fillStyle = 'gray';
ctx.fillRect(50, 140, 200, 20);

// Matrix transformation
ctx.translate(150, 150);
ctx.rotate(Math.PI / 2);
// ctx.translate(-140, -150);

// Rotated rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 140, 200, 20);

// Matrix transformation
// ctx.translate(-150, -150);
// ctx.rotate(Math.PI / 2);
ctx.translate(-140, -150);

// Rotated rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 140, 200, 20);
