const bingo_items = [
	"A PC bullies an NPC",
	"An NPC bullies a PC",
	"A PC encourages an NPC",
	"A PC encourages another PC"
]
let bingo_cells = document.querySelectorAll('td');
bingo_cells.forEach(cell => {
	if (cell.id != "free") {
		let r = Math.floor(Math.random() * bingo_items.length);
		cell.innerText = bingo_items[r];
		cell.addEventListener("click", (event) => {
			event.target.classList.toggle("selected");
		});
	}
});