function showGreeting(name) {
    const msg = 'Have a good day!';
    var greeting = name + ', ' + msg;
  
    alert(greeting);
}

function getGreeting(name) {
    const greeting = 'Have a good day!';
    var msg = name + ', ' + greeting;

    return msg;
}

function showMessage(msg) {
    alert(msg);
    console.log(msg);
}

showMessage('some message');

// Void Function
// function showMessage(msg) {
//     var output = 'Length: ' + msg.length + ' Message: ' + msg;

//     console.log(output);
// }

// showMessage('Lipsum...');
// showMessage('Hello World!');

// Any Type Function
// function getMessage(msg) {
//     var output = 'Length: ' + msg.length + ' Message: ' + msg;

//     return output;
// }

// var message = getMessage('Lipsum....');
// console.log(message);

// Recursive Function
// function recursiveTask(count) {
//     console.log('recursiveTask(' + count + ') Called');
    
//     if (count > 0) {
//         count--;
//         recursiveTask(count);
//     }
//     else {
//         console.log('recursiveTask(0) Ended');
//     }
// }

// recursiveTask(10);