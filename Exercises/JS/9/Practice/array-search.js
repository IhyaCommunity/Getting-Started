var keyword = prompt('Enter color keyword to search');

var rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

var index = rainbow.indexOf(keyword);

if (keyword == '' || index == -1) {
  alert('Keyword not found! Index is ' + index);
}
else {
  alert('Keyword found. Index is ' + index);
}