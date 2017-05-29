// DOM (Document Object Model)

var elBtn = document.getElementById("button");

elBtn.addEventListener('click', function (e) {
    
    var elText = document.getElementById("text");
    
    document.getElementById("output").innerText = elText.value.length;

}, false);
