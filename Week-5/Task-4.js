let totalPrice = 0;
const addToCart = (id, quantity) => {
    return new Promise((resolve, reject) => {
    fetch('https://fakestoreapi.com/products/' + id)
    .then(response => response.json())
    .then(data => {
        totalPrice += data.price * quantity;
        resolve();
    })
    .catch(err => reject());
    })
};

Promise.all([
    addToCart(1, 3),
    addToCart(4, 4),
    addToCart(3, 5)
]).then(() => {
    console.log('Total Price:', totalPrice);
});