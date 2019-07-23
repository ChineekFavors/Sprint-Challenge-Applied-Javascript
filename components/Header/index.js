// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
//<div class="header-container">
	
 
function Header() {
	//reference to div to append elements too
	const head = document.querySelector('.header-container');

	//creating elements to append to const head
	const divHeader = document.createElement('div');
	const span = document.createElement('span');
	const h1 = document.createElement('h1');
	const span2 = document.createElement('h1');

		//appending elements
		divHeader.appendChild(span);
		divHeader.appendChild(h1);
		divHeader.appendChild(span2);

	//adding class to elements
	divHeader.classList.add('header');
	span.classList.add('date');
	span2.classList.add('temp');
	//adding text content
	span.textContent = `SMARCH 28, 2019`;
	h1.textContent = 'Lambda Times';
	span2.textContent = "98\xB0";


	return head.appendChild(divHeader);

}
Header();
