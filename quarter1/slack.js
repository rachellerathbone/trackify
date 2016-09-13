// Alphabet position
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
// 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabetPosition(text) {
  var textLC = text.toLowerCase();
  var newString = [];
  var newModifiedString;
  for (i = 0; i < textLC.length; i++){
    if (textLC[i] !== ' ' && textLC[i] !== '\'' && textLC[i] !== '.') {
      newString[i] = (textLC.charCodeAt(i) - 96);
    }
  }
  newModifiedString = newString.join(' ');
  return newModifiedString;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// update to do list
function updateTodoList(todoList) {
  var lis = todoList.getElementsByTagName('li');
  var toDelete = [];
  var li;

  for (var i = 0; i < lis.length; i++) {
    li = lis[i];

    if (li.textContent.startsWith('COMPLETED')) {
      toDelete.push(li);
    }

    if (li.textContent.startsWith('URGENT')) {
      li.className += ' important';
    }
  }

  for (li of toDelete) {
    todoList.removeChild(li);
  }
}

function createList(sites) {
  var list = document.createElement('ul');
  var li, anchor;

  // loop through name value pairs in object
  for (var title in sites) {
    li = document.createElement('li');
    anchor = document.createElement('a');

    anchor.setAttribute('href', sites[title]);
    anchor.textContent = title;

    li.appendChild(anchor);
    list.appendChild(li);
  }
  return list;
}

function extractQuote(article) {
  //get the p tag content
  var ps = article.getElementsByTagName('p');
  //specific p tag
  var p = ps[0];
  //index of the first quote mark
  var indexOfQuote = p.textContent.indexOf('"');
  //if the location return is -1 the there is no quote

  if (indexOfQuote >= 0){
    //figure out location of last quote mark
    var lastIndexOfQuote = p.textContent.lastIndexOf('"');
    //make the quote
    var quote = p.textContent.substring(indexOfQuote, lastIndexOfQuote + 1);
    //create a blockquote
    var blockquote = document.createElement('blockquote');
    //set the text of the block quote
    blockquote.textContent = quote;
    //replace the p tag with a block
    article.replaceChild(blockquote, p);
  }
}

function createTable(data) {
  //extract the header
  var header = data[0];
  //extract footer
  var footer = data[data.length - 1];

  //make a table
  var table = document.createElement('table');
  //make a header
  var thead = document.createElement('thead');
  // make body
  var tbody = document.createElement('tbody');
  //make a table footer
  var tfoot = document.createElement('tfoot');
  var tr;

  //create the header
  tr = toRow(header, 'th');
  thead.appendChild(tr);

  //create some loop that make table rows
  for (var i = 1; i < data.length - 1; i++) {
    tr = toRow(data[i], 'td');
    tbody.appendChild(tr);
  }

  //create the footer
  tr = toRow(footer, 'td');
  tfoot.appendChild(tr);
  //append all header, rows and footer to table
  table.appendChild(thead);
  table.appendChild(tbody);
  table.appendChild(tfoot);

  //return the table
  return table;
}

function toRow(rowData, cellType) {
  var tr = document.createElement('tr');
  var cell;

  for (var item of rowData) {
    cell = document.createElement(cellType);
    cell.textContent = item;
    tr.appendChild(cell);
  }
  return tr;
}



// STOPLIGHT
var controls = document.getElementsByClassName('button'),
    lights = document.getElementsByClassName('bulb'),
    colors = ['red', 'yellow', 'green', 'black'];

function loadTextEnter(event){
  for (var i = 0; i < controls.length; i++) {
    if(controls[i] === event.target){
      lights[i].style.backgroundColor = colors[i];
    }
  }
}

function loadTextLeave(event){
  for (var i = 0; i < controls.length; i++) {
    if(controls[i] === event.target){
      lights[i].style.backgroundColor = colors[3];
    }
  }
}

function toggle(event){
  for(var i = 0; i < controls.length; i++){
    if(event.target === controls[i]){
      lights[i].style.backgroundColor !== colors[i] ? lights[i].style.backgroundColor = colors[i] : lights[i].style.backgroundColor = colors[3];
      if(!i){
        lights[1].style.backgroundColor = colors[3];
        lights[2].style.backgroundColor = colors[3];
      } else if (i === 1) {
        lights[0].style.backgroundColor = colors[3];
        lights[2].style.backgroundColor = colors[3];
      } else {
        lights[0].style.backgroundColor = colors[3];
        lights[1].style.backgroundColor = colors[3];
      }
    }
  }
}

for (var i = 0; i < controls.length; i++) {
  controls[i].addEventListener('click', toggle);
}


// STOPLIGHT
document.addEventListener('DOMContentLoaded', function() {

  var lightColorMap = {
    'stop': 'red',
    'slow': 'yellow',
    'go': 'green'
  };
  var buttonContainer = document.getElementById('buttonContainer');

  buttonContainer.addEventListener('click', lightSwitcher);
  buttonContainer.addEventListener('mouseover', logMouseTriggerMessage);
  buttonContainer.addEventListener('mouseout', logMouseTriggerMessage);

  //This function may do a number of . It is a callback function for an event listener and its
  //only parameter is the event from the event trigger.
  function lightSwitcher(event) {
    if (event.target !== event.currentTarget) {
      var eventId = event.target.id;
      var buttonAction = eventId.substring(0, eventId.indexOf("Button"));
      //Code to make the lights toggle
      //var bulb = document.getElementById(buttonAction + 'Light');
      // if (bulb.style.backgroundColor === '') {
      //   bulb.style.backgroundColor = lightColorMap[buttonAction];
      // } else {
      //   bulb.style.backgroundColor = '';
      // }
      //Code to make the lights turn on and off with the buttons
      // var bulbs = document.getElementsByClassName('bulb');
      // for (i = 0; i < bulbs.length; i++) {
      //   var bulbAction = bulbs[i].id.substring(0, bulbs[i].id.indexOf("Light"));
      //   if (bulbAction === buttonAction) {
      //     bulbs[i].style.backgroundColor = lightColorMap[bulbAction];
      //   } else {
      //     bulbs[i].style.backgroundColor = '';
      //   }
      // }
    }
    event.stopPropagation();
  }

  //This function logs out the type of button that had a mouse over or out.
  //It is a callback function for an event listener and its only parameter is
  //the event from the event trigger. The log is changes depending on the type
  //of event trigger.
  function logMouseTriggerMessage(event) {
    if (event.target !== event.currentTarget) {
      if (event.type === 'mouseover'){
        console.log("Entered " + event.target.innerHTML);
      } else if (event.type === 'mouseout') {
        console.log("Exited " + event.target.innerHTML)
      }
    }
    event.stopPropagation();
  }
})


// STOPLIGHT
var controls = document.getElementsByClassName('button');
var colors = ['red', 'yellow', 'green'];
var bulb = document.getElementsByClassName('bulb')

function loadTextEnter (){
  console.log("Entered " + event.target.textContent + " button");
}

function loadTextLeave (){
  console.log("Left " + event.target.textContent + " button");
}

function logText (){
  console.log(event.target.textContent);
}

for (var i = 0; i < controls.length; i++){
  controls[i].addEventListener('mouseenter', loadTextEnter);
  controls[i].addEventListener('mouseleave', loadTextLeave);
  controls[i].addEventListener('click', logText);
  controls[i].addEventListener('click', lightUp);
  bulb[i].addEventListener('click', lightUp);
}

function lightUp () {
  for (var i = 0; i < controls.length; i++){
    if (event.target === controls[i] && colors.indexOf(bulb[i].style.backgroundColor) === -1){
        bulb[i].style.backgroundColor = colors[i];
    } else {
        bulb[i].style.backgroundColor = "";
    }
  }
}


// STOPLIGHTvar button = document.getElementsByClassName('button'),
    light = document.getElementsByClassName('bulb'),
    lightcolor = ['red', 'yellow', 'green', '#111'];

function Enter(event) {
  var x = [];
  for (var i = 0; i < button.length; i++) {
    if (button[i] === event.target) {
      if(i === 0 && light[2].style.backgroundColor === lightcolor[2]) {
        stoplight();
        break;
      } else if (light[i].style.backgroundColor === lightcolor[i]) {
        light[i].style.backgroundColor = lightcolor[3];
      } else {
        light[i].style.backgroundColor = lightcolor[i];
      }
    } else {
      x.push(i);
    }
  }
  light[x[0]].style.backgroundColor = lightcolor[3];
  light[x[1]].style.backgroundColor = lightcolor[3];
}

function stoplight() {
  light[2].style.backgroundColor = lightcolor[3];
  light[1].style.backgroundColor = lightcolor[1];
  var timoutID = window.setTimeout(function () {
    light[1].style.backgroundColor = lightcolor[3];
    light[0].style.backgroundColor = lightcolor[0];
  }, 5000);

}
// function Leave(event) {
//   for (var i = 0; i < button.length; i++) {
//     if (button[i] === event.target) {
//       light[i].style.backgroundColor = lightcolor[3];
//     }
//   }
// }

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', Enter);
  // button[i].addEventListener('mouseleave', Leave);
}



// REPEAT CHARACTERS IN A STRING
// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function,
// return "Ruh roh! That isn't a string!"
// doubleChar("String") ==> "SSttrriinngg"
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!
// DONE?? Do it with a RegEx!
function doubleChar(str) {
  if (typeof str === "string") return str.replace(/(.)/g, "$1$1")
  return "Ruh roh! That isn't a string!"
}
module.exports = {
  doubleChar:doubleChar,
  attendance:"wordy word here"
}



// CONFERENCE PICKER
function conferencePicker(citiesVisited, citiesOffered) {
   debugger;
   var visitedAll = true;
   for (var i = 0; i < citiesOffered.length; i++) {
      if (citiesVisited.indexOf(citiesOffered[i] === -1)) {
         visitedAll = false;
         break;
      }
   }
   if (visitedAll === true) {
     return 'No worthwhile conferences this year!';
   } else {
     for (var j = 0; j < citiesOffered.length; j++) {
        if (citiesVisited.indexOf(citiesOffered[j]) === -1) {
           return citiesOffered[j];
        }
     }
   }
}


// CREATE LISTS
function createList(sites) {
  var $list = $('<ul>');

  for (var key in sites) {
    $list.append(`<li><a href="${sites[key]}">${key}</a></li>`);
    // $list.append($('<li>').append($('<a>').attr('href', sites[key]).text(key)));
  }
  return $list.get(0);
}


// EXTRACT quote
function extractQuote(article) {

  var texts = $(article).children().text();
  var first = texts.indexOf('"');
  var last = texts.lastIndexOf('"');
  var quote = texts.substring(first, last + 1);

  if (first >= 0) {
    $(article).children().remove();
    $(article).append($('<blockquote>').text(quote));
  }
}

// CREATE TABLE
function createTable(arr) {
  var $table=$('<table>');
  var $thead=$('<thead>');
  var $tbody=$('<tbody>');
  var $tfoot=$('<tfoot>');
  for (let i=0; i<arr.length; i++){
    var $tr=$('<tr>');
    for (let i2=0; i2<arr[i].length; i2++){
      if(i===0){
        $tr.append($('<th>').text(arr[i][i2]));
      } else {
        var $td=$('<td>');
        $tr.append($('<td>').text(arr[i][i2]));
      }
    }
    if (i===0){
      $thead.append($tr);
    } else if (i===arr.length-1) {
      $tfoot.append($tr);
    } else {
      $tbody.append($tr);
    }
  }
  $table.append($thead);
  $table.append($tbody);
  $table.append($tfoot);
  return $table.get(0);
}


// CREATE tablefunction createTable (data) {
  var $domtable = $('<table>');
  var $head = $('<thead>').append('<tr>');
  var $body = $('<tbody>');
  var $foot = $('<tfoot>').append('<tr>');

  for (var i = 0; i < data.length; i++){
    if (i < data.length - 1 && i > 0){
      $body.append('<tr>');
    }
    for (var j = 0; j < data[i].length; j++){
      if (i === 0){
        $head.children('tr').append('<th>' + data[i][j] + '</th>')
      } else if (i < data.length - 1){
        $body.children('tr:last-child').append('<td>' + data[i][j] + '</td>')
      } else {
        $foot.children('tr').append('<td>' + data[i][j] + '</td>')
      }
    }
  }
  var finish = $domtable.append($head).append($body).append($foot);
  return finish[0];
}


// CREATE tablefunction createTable(data) {
  var header = data[0];
  var footer = data[data.length - 1];
  var $table = $('<table>');
  var $thead = $('<thead>');
  var $tbody = $('<tbody>');
  var $tfoot = $('<tfoot>');
  var $tr;
  // See the definition of toRow below
  $tr = toRow(header, 'th');
  $thead.append($tr);
  for (var i = 1; i < data.length - 1; i++) {
    $tr = toRow(data[i], 'td');

    $tbody.append($tr);
  }
  $tr = toRow(footer, 'td');
  $tfoot.append($tr);
  $table.append($thead);
  $table.append($tbody);
  $table.append($tfoot);
  return $table.get(0);
}
function toRow(rowData, cellType) {
  var $tr = $('<tr>');
  for (var item of rowData) {
    $cell = $(`<${cellType}>`).text(item);

   $tr.append($cell);
  }
  return $tr;
}


// KENS SAD TURTLE FOR HTML
$(function() {

  $('*').click(function(event) {
    console.log(event.currentTarget.id);
  });

  $('#last').hover(function(event) {
    $(this).addClass('turtles-like-underlines');
  }, function(event) {
    $(this).removeClass('turtles-like-underlines');
  });

  $('#turtle-text').keypress(function(event) {
    console.log('key press');
  });

  $('#turtle-text').keydown(function(event) {
    console.log(event.which);
    console.log('key down');
  });

  $('#turtle-text').keyup(function(event) {
    console.log('key up');
  });

  $('#search-form').submit(function(event) {
    event.preventDefault();
    console.log('Searching...');
  });

  // $('#last').text('Turtle love!');
  //
  // $('#turtle-button').on('click', function(event) {
  //   var $target = $(event.target);
  //   $target.attr('disabled', true);
  // });
  //
  // $('#turtle-button').on('click', function() {
  //   var $this = $(this);
  //   $this.attr('disabled', true);
  // });
  //
  // var logMessage = function() {
  //   console.log('Oh turtles, I love thee.');
  // };
  //
  // $('#turtle-console-button-on').on('click', logMessage);
  //
  // $('#turtle-console-button-on').off('click', logMessage);
  //
  // var logEventType = function(event) {
  //   console.log(event.type);
  // };
  //
  // $('#last').on('click', logEventType);
  // $('#last').on('mouseenter', logEventType);
  // $('#last').on('mouseleave', logEventType);
  //
  // $('#last').off();
});


// COUNT VOWELS IN A string
var vowels = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
};
(function countVowels(string) {
    string = string.toLowerCase();
    for (i = 0; i < string.length; i++) {
        if (string[i] in vowels) {
            vowels[string[i]]++;
        }
    }
    console.log(vowels);
})("Here is A sentence");


// COUNT vowels
function countVowels(s) {
  var lowerS = s.toLowerCase();
  var obj = {};
  for (var char of lowerS) {
    if (char.match(/[aeiou]/)) {
      if (obj.hasOwnProperty(char)) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

// CALCULATOR
(function() {
  'use strict';

  var $screen = $('#screen');

  $('#clear').on('click', function() {
    $screen.text('');
  });

  $('#equals').on('click', function() {
    var screen = $screen.text();

    if (screen === 'Error') {
      return;
    }

    var regexp = /^(\-?\d+)(\+|\-|x|÷)(\-?\d+)$/;

    var matches = screen.match(regexp);

    if (matches === null) {
      $screen.text('Error');
      return;
    }

    var operand1 = parseInt(matches[1], 10);
    var operand2 = parseInt(matches[3], 10);
    var operator = matches[2];
    var total;

    if (operator === '+') {
      total = operand1 + operand2;
    }
    else if (operator === '-') {
      total = operand1 - operand2;
    }
    else if (operator === 'x') {
      total = operand1 * operand2;
    }
    else if (operator === '÷') {
      if (operand2 === 0) {
        $screen.text('Error');
        return;
      }

      total = operand1 / operand2;
    }

    var nextScreen = total.toString();

    $screen.text(nextScreen);
  });

  $('.buttons').on('click', 'span:not(#clear):not(#equals)', function(event) {
    var screen = $screen.text();

    if (screen === 'Error') {
      return;
    }

    var nextScreen = screen + event.target.textContent;
    $screen.text(nextScreen);
  });
})();


// CORS ISSUES
console.log('BEFORE THE AJAX');

var $xhr = $.getJSON('http://www.omdbapi.com/?t=Frozen');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }

    console.log(data.Title);
    var $moreXhr = $.getJSON('http://www.omdbapi.com/?t=What about bob');

    $moreXhr.done(function(d) {
      if ($moreXhr.status !== 200) {
        return
      }
      console.log(d.Title);
      console.log('AFTER THE AJAX');
    });
});


// AJAX HERO
(function() {
  'use strict';

  // array of movies to render; starts
  var movies = [];

  // function for rendering movies
  var renderMovies = function() {
    $('#listings').empty();
    if (!movies){
      return;
    }
    // iterates through movies
    for (var movie of movies) {
      // sets up grid structure
      var $col = $('<div class="col s6">');
      var $card = $('<div class="card hoverable">');
      var $content = $('<div class="card-content center">');
      var $title = $('<h6 class="card-title truncate">');

      // set up title card
      $title.attr({
        'data-position': 'top',
        'data-tooltip': movie.title
      });

      // set up title tooltip by loading text
      $title.tooltip({ delay: 50, });
      $title.text(movie.title);

      // set up poster element
      var $poster = $('<img class="poster">');

      if(movie.poster !== 'N/A'){
        // load poster data
        $poster.attr({
          src: movie.poster,
          alt: `${movie.poster} Poster`
        });
      }

      // append title and poster elements to content card
      $content.append($title, $poster);
      $card.append($content);

      // add action card and plot synopsis button
      var $action = $('<div class="card-action center">');
      var $plot = $('<a class="waves-effect waves-light btn modal-trigger">');

      // add plot synopsis attributes and text
      $plot.attr('href', `#${movie.id}`);
      $plot.text('Plot Synopsis');

      // append plot synopsis button to action card  and action card to overall card
      $action.append($plot);
      $card.append($action);

      // create a modal and its sub-cards
      var $modal = $(`<div id="${movie.id}" class="modal">`);
      var $modalContent = $('<div class="modal-content">');
      var $modalHeader = $('<h4>').text(movie.title);
      var $movieYear = $('<h6>').text(`Released in ${movie.year}`);
      var $modalText = $('<p>').text(movie.plot || '');

      // append modal's sub-cards
      $modalContent.append($modalHeader, $movieYear, $modalText);
      $modal.append($modalContent);

      // append the the card and modal to its encompassing column
      $col.append($card, $modal);

      // append the column to the listings section
      $('#listings').append($col);

      // trigger a lean modal
      $('.modal-trigger').leanModal();
    }
  };

  var getMovies = function(searchTerm) {
    movies = [];

    var $xhr = $.getJSON(`http://www.omdbapi.com/?s=${searchTerm}`);

    $xhr.done(function(data) {
      var results = data.Search;
      var movie;

      for (var result of results) {
        movie = {
          id: result.imdbID,
          poster: result.Poster,
          title: result.Title,
          year: result.Year
        };

        getPlot(movie);
      }
    });

    $xhr.fail(function(err) {
      console.error(err);
    });
  };

  var getPlot = function(movie) {
    var $xhr = $.getJSON(`http://www.omdbapi.com/?i=${movie.id}&plot=full`);

    $xhr.done(function(data) {
      movie.plot = data.Plot;

      movies.push(movie);

      renderMovies();
    });

    $xhr.fail(function(err) {
      console.error(err);
    });
  };

  $('form').on('submit', function(event) {
    event.preventDefault();

    var searchTerm = $('#search').val();

    if (searchTerm.trim() === '') {
      return;
    }

    getMovies(searchTerm);
  });
})();

// ROTATE array
// ** --> Ross' first Answer <-- **  //
//Splice Returns : A new array containing the deleted elements.
function rotate(arr, k) {
	var temp = [];
	temp = arr.splice(0, k);
	return arr.concat(temp); //concat gives new array --> Fail
}



// ** --> Answer <-- ** //

function rotate(arr, k){
 var temp = [];
 temp = arr.splice(0, k);
 return [...arr, temp]; //ES6 spread operator; returns nested arr. Not right but interesting --> Fail
}


// ** --> Answer <-- ** //

//The reduce() method applies a function against an accumulator and each value of the array
//(from left-to-right) to reduce it to a single value.
//arr.reduce(callback[, initialValue])

function rotate(arr, k) {
 var temp = [];
 temp = arr.splice(0, k);
 arr = temp.reduce( function(coll,item){
   coll.push(item);
   return coll;
}, arr );
return arr;
}

// ** --> Another Answer <-- ** //

// The apply() method calls a function with a given this value and arguments provided as an array
//(or an array-like object).
//fun.apply(thisArg, [argsArray])

function rotate(arr, k) {
  debugger;
	var temp = [];
	temp = arr.splice(0, k);
	arr.push.apply(arr, temp);
	return arr;
}


// PIXEL ART MAKER
'use strict'

document.addEventListener('DOMContentLoaded', function() {
  var canvasModButton = document.getElementById('canvasModButton');
  var pixelContainer = document.getElementById('pixelContainer');
  var resetButton = document.getElementById('resetButton');
  var mousingDown = false;

  window.addEventListener('mousedown', switchMouseState);
  window.addEventListener('mouseup', switchMouseState);
  canvasModButton.addEventListener('click', openCanvasModal);
  pixelContainer.addEventListener('mouseover', setPixelColor);
  pixelContainer.addEventListener('click', setPixelColor);
  resetButton.addEventListener('click', resetPixels)

  //Updates mousingDown to reflect whether the mouse is being clicked
  //Takes the event object as a parameter
  function switchMouseState(event) {
    mousingDown = event.type === 'mousedown';
  }

  //Brings up the canvas Modal and assigns event listeners to its elements
  function openCanvasModal() {
    var modal = document.getElementById('sizeChangeModal');

    modal.style.display = 'block';

    var closeButton = document.getElementById('close');
    var pixelModButton = document.getElementById('pixelModButton');
    var inputs = document.getElementsByTagName('input');
    var specInputs = {
      'percentOfScreenInput': document.getElementById('percentOfScreenInput'),
      'colsInput': document.getElementById('colsInput')
    };
    var atLeastOneBlankInput = true;

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onkeydown = setInputToNumbers(atLeastOneBlankInput, specInputs, pixelModButton);
    }

    closeButton.onclick = closeModal(modal);
    pixelModButton.onclick = setPixelSpecs(specInputs, modal);
  }

  function closeModal(modal) {
    return function(event) {
      modal.style.display = 'none';
    }
  }

  //
  function setInputToNumbers(atLeastOneBlankInput, specInputs, pixelModButton) {
    return function(event) {
      event.preventDefault();
      if (event.keyCode >= 48 && event.keyCode <= 57 &&
        event.target.value + event.key <= 100) {
        event.target.value += event.key;
      } else if (event.keyCode === 8) {
        event.target.value = event.target.value.slice(0, -1);
      } else if (event.keyCode === 9) {
        var formElements = document.getElementsByClassName('modalInput');
        var currentElementIndex = -1;
        for (var i = 0; i < formElements.length; i++) {
          if (formElements[i] === event.target) {
            currentElementIndex = i;
            break;
          }
        }
        if (currentElementIndex < formElements.length) {
          formElements[currentElementIndex + 1].focus();
        } else {
          formElements[0].focus();
        }
      }
      if (atLeastOneBlankInput || event.keyCode === 8) {
        atLeastOneBlankInput = false;
        for (var spec in specInputs) {
          var currentTextInput = specInputs[spec].value;
          var currentNumInput = parseInt(currentTextInput);
          if (currentTextInput === '' || currentNumInput < 1 || currentNumInput > 100) {
            atLeastOneBlankInput = true;
          }
        }
        pixelModButton.disabled = atLeastOneBlankInput;
      }
    }
  }

  //Creates a new canvas with the specifications given by the user
  //Takes the % of screen and # columns
  //Puts an error message at the bottom of the modal if not all of the specs are
  //whole numbers
  function setPixelSpecs(specInputs, modal) {
    return function(event) {
      var percentOfScreenInput = specInputs['percentOfScreenInput'].value;
      var numCols = specInputs['colsInput'].value;
      var pixelWidthAndHeight = 100 / numCols;
      var numPixelsDesired = Math.pow(numCols, 2);
      var main = document.getElementsByTagName('main')[0];

      main.removeChild(main.children[0]);

      var pixelContainer = document.createElement('div');
      pixelContainer.id = 'pixelContainer';
      pixelContainer.style.width = percentOfScreenInput + '%';
      pixelContainer.addEventListener('mouseover', setPixelColor);
      pixelContainer.addEventListener('click', setPixelColor);
      main.appendChild(pixelContainer);
      for (var i = 0; i < numPixelsDesired; i++) {
        var pixel = document.createElement('div');
        pixel.className = 'pixel';
        if (i <= numCols - 1) {
          pixel.style.borderTop = 'solid 1px #d3d3d3';
        } else {
          pixel.style.borderTop = 'none';
        }
        if ((i + 1) % numCols === 0) {
          pixel.style.borderRight = 'solid 1px #d3d3d3';
        } else {
          pixel.style.borderRight = 'none';
        }
        pixel.style.width = pixelWidthAndHeight + '%';
        pixel.style.paddingBottom = pixelWidthAndHeight + '%';
        pixelContainer.appendChild(pixel);
      }
      modal.style.display = 'none';
    }
  }

  //Sets the pixel color of the pixel over which the mouse is dragging
  function setPixelColor(event) {
    var currentColor = document.getElementById('pixelColorInput').value;
    if(event.type === 'click') {
      event.target.style.backgroundColor = currentColor;
    } else if(mousingDown) {
      event.target.style.backgroundColor = currentColor;
    }
  }

  //Resets all pixels to be blank
  function resetPixels(event) {
    var pixels = pixelContainer.children;
    console.log(pixelContainer);
    for (var i = 0; i < pixels.length; i++) {
      pixels[i].style.backgroundColor = '';
    }
  }
})


// FILTER GRADES WITH HIGHER ORDER FUNCTIONS
grades.filter(function(grade) {
  return grade >= 60;
}).map(function(grade) {
  switch(true) {
    case grade >= 90:
      return 'A'
    case grade >= 80:
      return 'B'
    case grade >= 70:
      return 'C'
    case grade >= 60:
      return 'D'
    default:
      return 'F'
  }
}).reduce(function(group, grade) {
  if (!group[grade]) {
    group[grade] = 0;
  }

  group[grade] += 1;

  return group
}, {});
