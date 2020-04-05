window.addEventListener('DOMContentLoaded', init);

const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
const spec = ['*', '/', '+', '-'];

function init() {
	let dec = false;
	let eva = false;
	console.log('ready');
	document.title = 'Javascript Calculator';
	var container = document.createElement('div');
	container.classList.add('container');
	container.style.maxWidth = '600px';
	container.style.margin = 'auto';
	document.body.appendChild(container);
	var heading = document.createElement('h1');
	heading.textContent = 'Pure Javascript Calculator';
	heading.style.textAlign = 'center';
	heading.style.color = 'red';
	container.appendChild(heading);
	var output = document.createElement('input');
	output.classList.add('output');
	output.setAttribute('type', 'text');
	output.style.width = '100%';
	output.style.lineHeight = '50px';
	output.style.fontSize = '2em';
	output.style.height = '30px';
	output.style.textAlign = 'right';
	container.appendChild(output);
	var main = document.createElement('div');
	main.classList.add('main');
	main.style.width = '100%';
	container.appendChild(main);


	opts.forEach(function(val) {
		// console.log(val);
		btnMaker(val, addOutput);
		
	})
	btnMaker('=', evalOutput);
	btnMaker("C", clearOutput);
	function evalOutput() {
		if(output.value === '') {
			output.style.border = 'red 1px solid';
		} else if(eva) {
			output.style.border = 'red 1px solid';
		} else {
			output.value = eval(output.value);
		}
		dec = output.value.includes('.');
		
	}

	function clearOutput() {
		output.value = ''
	}

	


	function btnMaker(txt, myFunction) {
		var btn = document.createElement('button');
		btn.setAttribute('type', 'button');
		btn.style.width = '23%';
		btn.style.margin = '1%';
		btn.style.lineHeight = '50px';
		btn.style.fontSize = '2em';
		btn.val = txt;
		btn.textContent = txt;
		btn.addEventListener('click', myFunction);
		main.appendChild(btn);
	}

	function addOutput(e){
		output.style.borderColor = 'black 1px solid'; 
		var char = e.target.val;
		if(char === '.') {
			if(dec) {
				char = '';
				output.style.borderColor = 'red 1px solid'; 
			}
			else {
				dec = true;
			}	
		}
		eva = spec.includes(char);
		if(eva) {
			dec = false;
		}
		output.value += char;
	}
}