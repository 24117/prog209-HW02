// list ot words
let firstArray = [];
let secondArray = [];






// anything JS code that might run before the DOM is done loading needs to be in ...
document.addEventListener("DOMContentLoaded", function (event) {
    // window.onload = function () {  was the old way of doing this

  FirstArrayScreen.style.display = "none";
	SecondArrayScreen.style.display = "none";
    
});

// define what should happen when click each of the buttons
startBtn.addEventListener("click",getThreeWords,false);
changeBtn.addEventListener("click",makeSecondArray,false);




function displayList() {
    let myUl = document.createElement('ul');
    document.getElementById('grad1').appendChild(myUl);
    for (let i = 0; i < firstArray.length; i++) {
        let myLi = document.createElement('li');
        myUl.appendChild(myLi);
        myLi.innerHTML = firstArray[i];
	};
  
  document.getElementById('startBtn').style.display = 'none'
	FirstArrayScreen.style.display = "block";
}

function getThreeWords() {
	let word;

	for(let i = 0; i < 3; i++) {
		word = prompt("Please enter your name", "");
		if(word != null) {
			firstArray.push(word);
		}
	}

	displayList();  // add the li elements now
	
  }

  function makeSecondArray() {
	secondArray = firstArray.map(function(oneWord) {        
		return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });

		displaySecondArray();
  
  }

  function displaySecondArray( ) {

    let myUl = document.createElement('ul');
    document.getElementById('grad2').appendChild(myUl);
    for (let i = 0; i < secondArray.length; i++) {
        let myLi = document.createElement('li');
        myUl.appendChild(myLi);
        myLi.innerHTML = secondArray[i];
	};

	FirstArrayScreen.style.display = "none";
	SecondArrayScreen.style.display = "block";
}