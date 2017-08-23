var keyword = prompt('Enter color keyword to search');

var rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

for (var i = 0; i < rainbow.length; i++) {
    if (rainbow[i].toLowerCase() == keyword) {
        console.log('Red item found. Index is ' + i);
        break;
    }
}