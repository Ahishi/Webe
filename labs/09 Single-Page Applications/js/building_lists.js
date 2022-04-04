const request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
const data = JSON.parse(request.responseText);
console.log(data);

const books = data.books;

const table = document.createElement('table');

makeItem(null);

for (let x in books) {
	makeItem(x);
}

function makeItem(x){

	let bookTitle = 'Title';
	let bookYear = 'Year';

	if(x != null){
		bookTitle = books[x].title;
		bookYear = books[x].year;
	}

	console.log(bookTitle);
	const tableRow = document.createElement('tr');

	const title = document.createElement('th');
	title.innerHTML = bookTitle;
	const year = document.createElement('th');
	year.innerHTML = bookYear;

	tableRow.addEventListener('click', function () {
		if(x != null){
			document.getElementById('title').textContent = bookTitle;
		}
	})

	tableRow.appendChild(title);
	tableRow.appendChild(year);

	table.appendChild(tableRow);
}

document.body.appendChild(table);
