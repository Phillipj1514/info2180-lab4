let blocks = [];
let userType = -1;
window.addEventListener('DOMContentLoaded', fill_Squares);


function fill_Squares(){
	let board_div = document.getElementById("board").querySelectorAll("div")
	for(let a = 0; a <board_div.length; a++){
		blocks[a] = {name: board_div[a], value:""}
		blocks[a].name.classList.add("square")
		// add click listener to each block
		blocks[a].name.addEventListener("click", change_block)
	}	
}

function change_block(){
	if(userType === -1){
		userType  = Math.floor(Math.random() * (10 - 1) ) + 1;
	}
	if(userType <= 5){
		this.classList.add("X");
		this.innerHTML = "X";
	}else{
		this.classList.add("O");
		this.innerHTML = "O";
	}
}