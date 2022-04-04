const notes = [];

/*
 * displays the 'add' screen if this has been bookmarked by user
 */
if (window.location.hash === '#add' || notes.length === 0) {
	document.getElementById('editPage').style.display = 'none';
} else {
	document.getElementById('addPage').style.display = 'none';
}

document.querySelector('#editPage input').addEventListener('input', updateNote);
document.querySelector('#editPage textarea').addEventListener('input', updateNote);

document.querySelector('#addPage button').onclick = function() {
	console.log('add note');
	const title = document.querySelector('#addPage input').value;
	const note = document.querySelector('#addPage textarea').value;
	let pushNote = {
		title: title,
		note: note
	}
	notes.push(pushNote);
	document.querySelector('#addPage input').value = " ";
	document.querySelector('#addPage textarea').value = " ";
};

/*
 * handles navigation between the add and edit 'screens'
 */ 
document.querySelector('nav > ul > li:nth-child(1)').onclick = function() {
	console.log('first link clicked');
	document.getElementById('editPage').style.display = 'none';
	document.getElementById('addPage').style.display = 'block';
};

document.querySelector('nav > ul > li:nth-child(2)').onclick = function() {
	console.log('second link clicked');
	loadList();
	document.getElementById('addPage').style.display = 'none';
	document.getElementById('editPage').style.display = 'block';
};

function updateNote() {
	console.log('update note');
	const title = document.querySelector('#editPage input').value;
	const note = document.querySelector('#editPage textarea').value;
	const id = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log(id);
	const updated = {title: title, note: note};
	console.log(updated);
	notes[id] = {title: title, note: note};
	loadList();
}

function display(element) {
	console.log('display');
	console.log(element.parentNode.parentNode.id);
	const details = document.getElementById('details');
	const id = element.parentNode.parentNode.id;
	document.querySelector('#editPage input').value = notes[id].title;
	document.querySelector('#editPage textarea').value = notes[id].note;
	document.querySelector('#editPage p').innerHTML = id;
}

function rem(element) {
	console.log('remove');
	const id = element.parentNode.parentNode.id;
	console.log(id);
	notes.splice(id, 1);
	loadList();
	const editId = parseInt(document.querySelector('#editPage p').innerHTML, 10);
	console.log('id: '+id);
	console.log('editId: '+editId);
	if (id === editId) {
		console.log('deleted document being edited!');
		document.querySelector('#editPage input').value = '';
		document.querySelector('#editPage textarea').value = '';
	}
}

function loadList() {
	const table = document.getElementById('list');
	table.innerHTML = '';
	for (let i=0; i<notes.length; i++) {
		const row = document.createElement('tr');
		row.id = i;
		row.innerHTML = '<td><a onclick="display(this)" href="#">'+notes[i].title+'</a></td><td><a onclick="rem(this)" class="delete" href="#">delete</a></td>';
		table.appendChild(row);
	}
}