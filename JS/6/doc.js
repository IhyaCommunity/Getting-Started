// DOM (Document Object Model)

var el = document.getElementById("para");
// console.log(el.innerText);

el.innerText = 'Lipsum Lipsum Lipsum...';

document.querySelector('.hide').addEventListener('click', function () {
    // document.getElementById('para').style.display = 'none';

    // document.getElementById('para').style.display = 'none';

    document.getElementById('para').classList.add('no-display');
    
}, false);


document.querySelector('.show').addEventListener('click', function () {
    // document.getElementById('para').style.display = 'none';

    // document.getElementById('para').style.display = 'block';

    document.getElementById('para').classList.remove('no-display');
    
}, false);