let blocks = [];
let user_1_Type = -1;
let turns = 0;
let groups = {row1:0, row2: 0, row3: 0, col1: 0, col2:0, col3: 0, diag1: 0, diag2:0};
window.addEventListener('DOMContentLoaded', initiate);


function initiate(){
	if(user_1_Type === -1){
		user_1_Type  = Math.floor(Math.random() * (10 - 1) ) + 1;
		if(user_1_Type <= 5){ user_1_Type = "X"}
	}
	let board_div = document.getElementById("board").querySelectorAll("div")
	for(let a = 0; a <board_div.length; a++){
		blocks[a] = {name: board_div[a], value:""};
		//add an id to each div
		blocks[a].name.id = a;
		// add click listener to each block
		blocks[a].name.addEventListener("click", set_block);
		// add on mouseover listener and mouseout listener for hover effect
		blocks[a].name.addEventListener("mouseover", hover_set_block);
		blocks[a].name.addEventListener("mouseout", unset_block);
	}
	//add the square property to each div
	fill_all()	
}

function set_block(){
	if(blocks[this.id].value === ""){
		this.classList.remove("hover");
		if(turns % 2 == 1){
			if(user_1_Type == "X"){
				this.classList.add("X");
				this.innerHTML = "X";
				blocks[this.id].value = "X" 
			}else{
				this.classList.add("O");
				this.innerHTML = "O";
				blocks[this.id].value = "O" 

			}
		}else{
			if(user_1_Type == "X"){
				this.classList.add("O");
				this.innerHTML = "O";
				blocks[this.id].value = "O" 
			}else{
				this.classList.add("X");
				this.innerHTML = "X";
				blocks[this.id].value = "X" 
			}
		}
		turns++;
		setGroup(this.id);
		checkWinner();
	}
}
function hover_set_block(){
	if(blocks[this.id].value === ""){
		this.classList.add("hover")
		if(turns % 2 == 1){
			if(user_1_Type == "X"){
				this.classList.add("X");
				this.innerHTML = "X";
			}else{
				this.classList.add("O");
				this.innerHTML = "O";
			}
		}else{
			if(user_1_Type == "X"){
				this.classList.add("O");
				this.innerHTML = "O";
			}else{
				this.classList.add("X");
				this.innerHTML = "X";
			}
		}
	}
}
function unset_block(){
	if(blocks[this.id].value === ""){
		this.classList.remove("X","O","hover");
		this.innerHTML = "";
	}
}
function checkWinner(){
	if(turns > 4){
		for(values in groups){
			if(groups[values] == 3 ){
				document.getElementById("status").innerHTML = "Congratulations! X is the Winner!"
				document.getElementById("status").classList.add("you-won");
				clearAll();
				break;
			}else if(groups[values] == -3){
				document.getElementById("status").innerHTML = "Congratulations! O is the Winner!"
				document.getElementById("status").classList.add("you-won");
				clearAll();
				break;

			}
		}
	}
}
function setGroup(id){
	switch(id){
		case "0":
			if(blocks[id].value == "X"){
				groups.row1++;
				groups.col1++;
				groups.diag1++;
			}else{
				groups.row1--;
				groups.col1--;
				groups.diag1--;
			}
			break;
		case "1":
			if(blocks[id].value == "X"){
				groups.row1++;
				groups.col2++;
			}else{
				groups.row1--;
				groups.col2--;
			}
			break;
		case "2":
			if(blocks[id].value == "X"){
				groups.row1++;
				groups.col3++;
				groups.diag2++;
			}else{
				groups.row1--;
				groups.col3--;
				groups.diag2--;
			}
			break;
		case "3":
			if(blocks[id].value == "X"){
				groups.row2++;
				groups.col1++;
			}else{
				groups.row2--;
				groups.col1--;
			}
			break;
		case "4":
			if(blocks[id].value == "X"){
				groups.row2++;
				groups.col2++;
				groups.diag1++;
				groups.diag2++;
			}else{
				groups.row2--;
				groups.col2--;
				groups.diag1--;
				groups.diag2--;
			}
			break;
		case "5":
			if(blocks[id].value == "X"){
				groups.row2++;
				groups.col3++;
			}else{
				groups.row2--;
				groups.col3--;
			}
			break;
		case "6":
			if(blocks[id].value == "X"){
				groups.row3++;
				groups.col1++;
				groups.diag2++;
			}else{
				groups.row3--;
				groups.col1--;
				groups.diag2--;
			}
			break;
		case "7":
			if(blocks[id].value == "X"){
				groups.row3++;
				groups.col2++;
			}else{
				groups.row3--;
				groups.col2--;
			}
			break;
		case "8":
			if(blocks[id].value == "X"){
				groups.row3++;
				groups.col3++;
				groups.diag1++;
			}else{
				groups.row3--;
				groups.col3--;
				groups.diag1--;
			}
			break;
	}
}

function clearAll(){
	for(let a = 0; a <blocks.length; a++){
		blocks[a].name.classList.remove("square");
		blocks[a].name.innerHTML = ""
		blocks[a].value ="";
	}
}
function fill_all(){
	for(let a = 0; a <blocks.length; a++){
		blocks[a].name.classList.add("square");
	}
}