// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const promise = axios.get('https://lambda-times-backend.herokuapp.com/topics');
promise
	.then(response => {	
		tabElements = response.data.topics;
			tabElements.forEach((element) =>{
			tabComponent(element)
		});	
	})
	.catch(error => {
		console.log ('error:', error);
	})
	
	

function tabComponent(textContent){
	const tabs = document.querySelector('.topics');		
	const div = document.createElement('div');
	div.classList.add('tab');
	div.textContent = textContent;
	return tabs.appendChild(div);
}


