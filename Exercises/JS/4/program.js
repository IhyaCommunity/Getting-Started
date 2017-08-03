var code = prompt('Enter country code.');
var country = getCountry(code);

alert(country);

function getCountry(code) {
    if (typeof code == 'undefined' || code == null) {
        return null;
    }

    var output;

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
    
    return output; 
}
