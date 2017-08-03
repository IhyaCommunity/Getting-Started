var rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

document.querySelector('button').addEventListener('click', function () {
    var rainbowEl = document.querySelector('#rainbow');
    rainbowEl.innerHTML = '';

    for (var i = 0; i < rainbow.length; i++) {
        var li = document.createElement('li');
        var anchor = document.createElement('a');

        anchor.innerText = 'X';
        anchor.classList.add('remove');

        anchor.addEventListener('click', function(e) {
            // var el = e.target;
            
            this.parentNode.remove();
        }, false);

        li.innerText = rainbow[i];

        li.appendChild(anchor);
        rainbowEl.appendChild(li);
    }
}, false);
