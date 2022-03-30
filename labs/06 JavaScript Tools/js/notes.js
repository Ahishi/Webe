'use strict';
const notes = [];

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
	displayList();
}

let button = document.getElementById('add');
button.onclick = addItem;
