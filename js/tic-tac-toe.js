let blocks = [];
let userType = -1;
window.addEventListener('DOMContentLoaded', fill_Squares);


function fill_Squares(){
	if(userType === -1){
		userType  = Math.floor(Math.random() * (10 - 1) ) + 1;
	}
	let board_div = document.getElementById("board").querySelectorAll("div")
	for(let a = 0; a <board_div.length; a++){
		blocks[a] = {name: board_div[a], value:""};
		//add an id to each div
		blocks[a].name.id = a;
		//add the square property to each div
		blocks[a].name.classList.add("square");
		// add click listener to each block
		blocks[a].name.addEventListener("click", set_block);
		// add on mouseover listener and mouseout listener for hover effect
		blocks[a].name.addEventListener("mouseover", hover_set_block);
		blocks[a].name.addEventListener("mouseout", unset_block);
	}	
}

function set_block(){
	this.classList.remove("hover");
	if(userType <= 5){
		this.classList.add("X");
		this.innerHTML = "X";
		blocks[this.id].value = "X" 
	}else{
		this.classList.add("O");
		this.innerHTML = "O";
		blocks[this.id].value = "O" 

	}
	console.log(this.id)
	console.log(blocks[this.id])
}
function hover_set_block(){
	if(blocks[this.id].value === ""){
		if(userType <= 5){
			this.classList.add("X","hover");
			this.innerHTML = "X";
		}else{
			this.classList.add("O","hover");
			this.innerHTML = "O";
		}
	}
}
function unset_block(){
	if(blocks[this.id].value === ""){
		this.classList.remove("X","O","hover");
		this.innerHTML = "";
	}
}