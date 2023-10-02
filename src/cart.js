const label = document.getElementById('label');
const shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem("data"))|| [];

console.log(basket);

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);

};
    calculation ();

    let generateCartItems = () => {
        if (basket.length !== 0) {
            // Code to update cart when it's not empty
        } else {
            shoppingCart.innerHTML = ``;
            label.innerHTML = `
                <h2>Cart is Empty</h2>
                <a href="index.html">
                    <button class="HomeBtn"> Back to home </button>
                </a>
            `;
        }
    };
    generateCartItems ();
