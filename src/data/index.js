import { faker } from "@faker-js/faker";
import fs from "fs";

const array = [];

for (let index = 0; index < 12; index++) {
  array.push({
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    price: faker.commerce.price({
      min: 50000,
      max: 999999,
      symbol: "RM",
      dec: 2,
    }),
    size: faker.number.int({ min: 10, max: 800 }),
    img: "",
    agent: {
      name: faker.person.fullName(),
      title: faker.person.jobTitle(),
      phone: faker.phone.number(),
    },
    address: {
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
    },
    map: {
      long: faker.location.longitude(),
      lat: faker.location.latitude(),
      direction: `${faker.location.streetAddress()} ${faker.location.city()}`,
    },
    others: [
      {
        price: faker.commerce.price({
          min: 50000,
          max: 999999,
          symbol: "RM",
          dec: 2,
        }),
        size: faker.number.int({ min: 10, max: 800 }),
        address: faker.location.streetAddress(),
      },
      {
        price: faker.commerce.price({
          min: 50000,
          max: 999999,
          symbol: "RM",
          dec: 2,
        }),
        size: faker.number.int({ min: 10, max: 800 }),
        address: faker.location.streetAddress(),
      },
      {
        price: faker.commerce.price({
          min: 50000,
          max: 999999,
          symbol: "RM",
          dec: 2,
        }),
        size: faker.number.int({ min: 10, max: 800 }),
        address: faker.location.streetAddress(),
      },
      {
        price: faker.commerce.price({
          min: 50000,
          max: 999999,
          symbol: "RM",
          dec: 2,
        }),
        size: faker.number.int({ min: 10, max: 800 }),
        address: faker.location.streetAddress(),
      },
    ],
  });
}

fs.writeFile("property.json", JSON.stringify(array), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Ok");
  }
});
