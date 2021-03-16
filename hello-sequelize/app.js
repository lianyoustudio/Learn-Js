const model = require('./model');

let Pet = model.Pet;
let User = model.User;


(async () => {
    var user = await User.create(
        {
            name : 'John',
            gender : false,
            email : 'john@example.com',
            passwd: 'hahaha'
        }
    );
    console.log('created ' + JSON.stringfy(user));

    var cat = await Pet.create(
        {
            ownnerId : user.id,
            name : 'Garfield',
            gender : false,
            birth : '3020-09-09'
        }
    );
    console.log('created ' + JSON.stringfy(cat));

    var dog = await Pet.create(
        {
            ownnerId : user.id,
            name : 'Odie', 
            gender : true,
            birth : '2040-09-09'
        }
    );
    console.log('created ' + JSON.stringfy(dog));

})();