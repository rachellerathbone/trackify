var firstParagraph = document.getElementById('main');
//console.log(firstParagraph);

var allUnorderedLists = document.getElementsByTagName('ul');
//console.log(allUnorderedLists);

var firstUnorderedList = allUnorderedLists[0];
//console.log(firstUnorderedList);

var allListItems = document.getElementsByTagName('li');
for (var i = 0; i < allListItems.length; i++) {
  //console.log(allListItems[i]);
}

var evenElements = document.getElementsByClassName('even');
//console.log(evenElements[0].innerHTML);

var oddElements = document.getElementsByClassName('odd');
for (var i = 0; i < oddElements.length; i++) {
  //console.log(oddElements[i].innerHTML)
}
//console.log(oddElements[0].innerHTML);

var firstEvenElement = evenElements[0];
//console.log(firstEvenElement);

var firstOddElement = oddElements[0];
//console.log(firstOddElement);

var main = document.querySelector('#main');
//console.log(main);

var firstOddElement = document.querySelector('.odd');
//console.log(firstOddElement);

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
for (var i = 0; i < oddAndEvenElements.length; i++) {
  //console.log(oddAndEvenElements[i].innerHTML);
}

var allListItems = document.getElementsByTagName('li');
for (var i = 0; i < allListItems.length; i++) {
  //console.log(allListItems[i].textContent = i);
  document.querySelector('.odd').style.backgroundColor = 'red';
}

var propertyTest = document.getElementById('main');

var li = document.createElement('li');
//console.log(li);

li.textContent = "another list item";
//console.log(li);

firstUnorderedList.appendChild(li);
console.log(firstUnorderedList);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
firstUnorderedList.insertBefore(anotherListElement, firstUnorderedList.firstChild);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
firstUnorderedList.removeChild(firstUnorderedList.lastChild);
console.log(allListItems);
