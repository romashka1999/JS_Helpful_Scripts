const items = [
    {name: 'bike', price: 100},
    {name: 'tv', price: 200},
    {name: 'album', price: 10},
    {name: 'book', price: 5},
    {name: 'phone', price: 500},
    {name: 'keyboard', price: 25},
    {name: 'computer', price: 2000}
];

// filter ----------------------------------------------
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filteredItems);

// map -------------------------------------------------
const itemNames = items.map((item) => {
    return item.name;
});
console.log(itemNames);

// find ------------------------------------------------
const foundItem = items.find((item) => {
    return item.name === 'book';
});
console.log(foundItem);

// foreach ---------------------------------------------
items.forEach((item) => {
    console.log(item.price);
});

// some ------------------------------------------------
const existCheapItems = items.some((item) => {
    return item.price <= 10;
});
console.log(existCheapItems);

// every -----------------------------------------------
const hasAllExpensiveItems = items.every((item) => {
    return item.price > 100;
});
console.log(hasAllExpensiveItems);

// reduce ----------------------------------------------
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);
console.log(totalPrice);


