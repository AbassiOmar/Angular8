var faker = require('faker');

var database = { students: []};

for (var i = 1; i<= 300; i++) {
  database.students.push({
    id: i,
    name:  faker.name.findName(),
    phone:faker.phone.phoneNumber(),
    address: faker.address.streetAddress() +' - '+ faker.address.streetName() ,
    image:faker.image.avatar()
  });
}

console.log(JSON.stringify(database));
