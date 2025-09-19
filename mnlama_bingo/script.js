const bingo_items = {
    meta: [
        "There's an issue with the music bot",
        "There's dead air for more than 30 seconds",
        "You were on time",
        "Aaron doesn't do a character voice",
        "An NPC talks in a surfer dude voice",
        "The opening changes",
        "The closing changes",
    ],
    character: [
        "Sophia chooses not to participate in an activity",
        "Elwyn starts an activity",
        "Felix lightning lure web swings",
        "Your character tells a lie",
        "A PC convinces Callista to join in an activity",
        "A PC convinces Sophia to join in an activity",
        "A PC wants to go to the library",
    ],
    roleplay: [
        "An NPC flirts with a PC",
        "An NPC bullies a PC",
        "A PC flirts with an NPC",
        "A PC bullies an NPC",
        "A PC encourages another character",
        "A PC opens up to another PC",
        "A PC bullies another PC",
    ],
    rolls: [
        "A PC rolls a nat 1",
        "A PC rolls a nat 20",
        "An NPC rolls a nat 1",
        "An NPC rolls a nat 20",
        "You rolled a nat 1",
        "You rolled a nat 20",
        "You succeed an ability check",
        "You fail an ability check",
        "You succeed a saving throw",
        "You fail a saving throw",
    ],
    clues: [
        "The Champion of Ares",
        "The Children of Discord",
        "God drama",
        "The cull",
        "Polyphemus",
		"The presence inside Niki",
    ],
};
let bingo_cells = document.querySelectorAll('td');
bingo_cells.forEach(cell => {
	if (cell.id != "free") {
		console.log(cell.id)
		let category = bingo_items[cell.id];
		let r = Math.floor(Math.random() * category.length);
		cell.innerText = category[r];
		cell.addEventListener("click", (event) => {
			event.target.classList.toggle("selected");
		});
	}
});