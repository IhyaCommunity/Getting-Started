// Run in Browser

var keyword = prompt('Enter keyword to search');

var msg = 'Hello, this is is some text...';

var index = msg.indexOf(keyword);

if (keyword == '' || index == -1) {
  alert('Keyword not found! Index is ' + index);
}
else {
  alert('Keyword found. Index is ' + index);
}