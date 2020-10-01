prod1 = {
    name: "Sony",
    price: 300,
    weight: 20
}

prod2 = {
    name: "Philips",
    price: 200,
    weight: 15
}

console.log(prod1);
console.log(prod2);

const result = prod2.price + prod1.price;
const result2 = prod2.weight + prod1.weight;

console.log(`Produkt numer jeden to ${prod1.name}`);
console.log(`Produkt numer dwa to ${prod2.name}`);
console.log(`Produkty kosztuja razem ${result}`);
console.log(`Produkty waza razem ${result2}`);


const currentUser = {
    name: "Janusz",
    surname: "Debski",
    email: "xxx@xx.pl",
    www: "www.xxx.pl",
    userType: "Premium",

    show() {
        console.log(`
        imię : ${this.name},
        nazwisko : ${this.surname},
        E-mail : ${this.email},
        www : ${this.www},
        konto : ${this.userType}
        `);
    },
}


currentUser.show(); // <--- wywolanie metody na show dla obiektu w ktorym jest.

const book = {
    title: "Odyssey One",
    author: "Evan Currie",
    pageCount: 400,
    publisher: "PWN",
    // }

    // console.log(Object.keys(book));
    showDetails() {
        for (let key in this) {
            // console.log(this[key]);
        }
        for (let [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`);
        }
    }
}

book.showDetails();

// console.log(book.keys);
// console.log(book.value);