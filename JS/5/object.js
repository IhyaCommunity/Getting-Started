// Object

var bird = {
    name: "bird",
    canFly: true,
    color: "white",
    nest: true,
    canSleep: false,
    isSitting: true,
    flying: function () {
        // Code here
        if (this.isSitting == false) {
            return true;
        }

        return false;
    }
};

console.log('Flying: ' + bird.flying());

// var duck = new Object(bird);

// duck.name = "duck";
// duck.isSearchEingine = false;

// console.log(duck);

// JSON

// var stringObj = '{"name": "Duck"}';
// var obj = JSON.parse(stringObj);

// console.log(obj.name);