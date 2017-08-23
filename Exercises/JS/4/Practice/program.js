var code = prompt('Enter country code.');

var output;

if (typeof code == 'undefined' || code == null) {
    output = 'Input is empty';
}
else {
    switch (code) {
        case 'PK':
            output = 'Pakistan';
        break;
    
        case 'UK':
            output = 'United Kingdom';
        break;
    
        case 'IN':
            output = 'India';
        break;
    
        default:
            output = 'Country code does not exist.';
        break;
    }
}

alert(output);