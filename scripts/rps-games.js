//@ts-check

/** @type { HTMLElement } */
//@ts-ignore We Know game result header is not null
let playerControls = document.getElementById("player-controls");

//game-results
/** @type { HTMLElement } */
//@ts-ignore We Know game result header is not null
let gameResultHeader = document.getElementById("game-results");

/** @type { HTMLElement } */
//@ts-ignore We Know game result header is not null
let gameResultSection = document.getElementById("game-restart");

gameResultHeader.innerText = "Hey there!!";

let isGameOver = false;

let weapons = [
	{
		type: "Rock",
		beats: "Scissors",
	},
	{
		type: "Paper",
		beats: "Rock",
	},
	{
		type: "Scissors",
		beats: "Paper",
	},
];

function pickRandomWeapon(weapons) {
	let randy = Math.floor(Math.random() * weapons.length);
	return weapons[randy];
}

function determineOutcome(playerWeapon, computerWeapon) {
	if (playerWeapon.type === computerWeapon.type) {
		return "it's a tie! Try again";
	}

	isGameOver = true;
	showRestart();

	if (playerWeapon.beats === computerWeapon.weapon) {
		return `Player wins! ${playerWeapon.type}`;
	}

	return `Computer wins! ${computerWeapon.type}`;
}

function playerControlHandler(e) {
	//if (isGameOver) {
	//	return;
	//}
	if (isGameOver) {
		return;
	}

	let weaponName = e.target.innerText;
	let playerWeapon = weapons.find((w) => w.type === weaponName);

	if (!playerWeapon) {
		console.log("ERROR! Player weopon undefined");
		return;
	}

	let computerWeapon = pickRandomWeapon(weapons);

	let result = determineOutcome(playerWeapon, computerWeapon);

	gameResultHeader.innerText = result;

	console.log(result);
}

function gameResultHandler(e) {
	if (e.target.id === "btn-restart") {
		isGameOver = false;
		showPlayerControls();
		gameResultHeader.innerText = "";
	}
}
function showRestart() {
	gameRestartSection.style.display = "initial";
	playerControls.style.display = "none";
}

function showPlayerControls() {
	gameRestartSection.style.display = "none";
	playerControlHandler.style.display = "initial";
}
playerControls?.addEventListener("click", playerControlHandler);

gameRestartSection.addEventListener("click", gameResultHandler);
