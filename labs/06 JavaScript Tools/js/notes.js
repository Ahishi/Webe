'use strict';
let notes = [];

loadList();

function addItem() {
	let textbox = document.getElementById('item');
	const itemText = textbox.value;
	textbox.value = '';
	textbox.focus();

	if(notes.some((e, i) => {
		if(e.title === itemText){
			notes.splice(i, 1, {title: itemText, quantity: e.quantity+1});
			return true;
		} else {
			return false;
		}
	})){} else {
		notes.push({title: itemText, quantity: 1});
	}

	saveList();
	displayList();
}

function displayList() {
	const table = document.getElementById('list');
	table.innerHTML = '';
	for (let i = 0; i<notes.length; i++) {
		const note = notes[i];
		let node = document.createElement('tr');
		node.innerHTML = '<td>' + note.title + '</td><td>' + note.quantity + '</td><td><a href="#" onClick="deleteIndex(' + i + ')">delete</td>';
		table.appendChild(node);
	}
}

function deleteIndex(i) {
	notes.splice(i, 1);
	saveList();
	displayList();
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

let button = document.getElementById('add');
button.onclick = addItem;
