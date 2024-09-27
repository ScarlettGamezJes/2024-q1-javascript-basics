//@ts-check
import{ SquareShape } from "./shapes/square.js";

/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement/**
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is an CanvasRenderingContext2D
const ctx = canvas.getContext("2d");



let s1 = new SquareShape(0, 0);

let shapes = [];

for (let i = 0; i < 100; i++) {
    shapes.push(new SquareShape(0, 0, ctx, canvas));
}

let lastTime = 0;

function drawLoop(timeStamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timeStamp - lastTime;
	lastTime = timeStamp;

	s1.draw();
	s1.update();

    for (const shape of shapes) {
        shape.update();
        shape.draw();
    }

	window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);
