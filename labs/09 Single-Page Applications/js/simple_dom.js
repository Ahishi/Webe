//console.log('page loaded');

console.log(document);

let inputs = document.getElementsByTagName('input');
for(let i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('input', function() {
		console.log('save');
		// get a DOM object representing a form field.
		const name = document.querySelector('#userForm input[type="text"]');
		console.log(name);
		document.querySelector('#summary h1').innerHTML = name.value;
		const data = document.querySelectorAll('#userForm input');
		console.log(data);
		console.log('updating email');
		const email = document.querySelector('#userForm input[type="email"]').value;
		document.querySelector('#summary p').innerHTML = email;
		const paragraphs = document.querySelectorAll('#summary p');
		console.log('found '+paragraphs.length+' p tags');
		paragraphs[1].innerHTML = 'Hello World!';
	});
}