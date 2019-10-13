window.addEventListener('DOMContentLoaded', fill_Squares);


function fill_Squares(){
	let blocks = document.getElementById("board").querySelectorAll("div")
	for(let a = 0; a <blocks.length; a++){
		blocks[a].classList.add("square")
	}
	console.log(blocks);
}
