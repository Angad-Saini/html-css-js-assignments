var productsDiv = document.getElementById("products");
var message = document.getElementById("message");
var searchInput = document.getElementById("search");
var categorySelect = document.getElementById("category");
var sortSelect = document.getElementById("sort");
var loadMoreBtn = document.getElementById("load-more");

var allProducts = [];
var howMany = 8;

// get cart from local storage (or empty if nothing saved)
var cart = JSON.parse(localStorage.getItem("cart"));
if (cart == null) {
    cart = [];
}

// get products from the api
function getProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            allProducts = data;
            makeCategories();
            showProducts();
            showCart();
        })
        .catch(function (error) {
            message.textContent = "Could not load products :(";
            console.log(error);
        });
}

// put the categories in the dropdown
function makeCategories() {
    var categories = [];

    for (var i = 0; i < allProducts.length; i++) {
        var c = allProducts[i].category;
        if (categories.indexOf(c) == -1) {
            categories.push(c);
        }
    }

    for (var i = 0; i < categories.length; i++) {
        var option = document.createElement("option");
        option.value = categories[i];
        option.textContent = categories[i];
        categorySelect.appendChild(option);
    }
}

function showProducts() {
    var list = [];

    // filter by search and category
    for (var i = 0; i < allProducts.length; i++) {
        var p = allProducts[i];
        var search = searchInput.value.toLowerCase();

        if (p.title.toLowerCase().indexOf(search) != -1) {
            if (categorySelect.value == "all" || categorySelect.value == p.category) {
                list.push(p);
            }
        }
    }

    // sorting
    if (sortSelect.value == "low") {
        list.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    if (sortSelect.value == "high") {
        list.sort(function (a, b) {
            return b.price - a.price;
        });
    }
    if (sortSelect.value == "name") {
        list.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
    }

    productsDiv.innerHTML = "";

    if (list.length == 0) {
        message.textContent = "No products found.";
    } else {
        message.textContent = "";
    }

    // only show some of them
    for (var i = 0; i < list.length && i < howMany; i++) {
        var p = list[i];

        var card = document.createElement("div");
        card.className = "card";

        card.innerHTML =
            "<img src='" + p.image + "'>" +
            "<h3>" + p.title + "</h3>" +
            "<p class='category'>" + p.category + "</p>" +
            "<p class='price'>$" + p.price.toFixed(2) + "</p>" +
            "<button onclick='addToCart(" + p.id + ")'>Add to Cart</button>";

        productsDiv.appendChild(card);
    }

    // hide the button if there is nothing more to show
    if (list.length > howMany) {
        loadMoreBtn.style.display = "block";
    } else {
        loadMoreBtn.style.display = "none";
    }
}

function addToCart(id) {
    // check if its already in the cart
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart[i].quantity = cart[i].quantity + 1;
            saveCart();
            showCart();
            return;
        }
    }

    // if not, find it and add it
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].id == id) {
            cart.push({
                id: allProducts[i].id,
                title: allProducts[i].title,
                price: allProducts[i].price,
                quantity: 1
            });
        }
    }

    saveCart();
    showCart();
}

function removeFromCart(id) {
    var newCart = [];

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id != id) {
            newCart.push(cart[i]);
        }
    }

    cart = newCart;
    saveCart();
    showCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart() {
    var cartItems = document.getElementById("cart-items");
    var count = 0;
    var total = 0;

    cartItems.innerHTML = "";

    for (var i = 0; i < cart.length; i++) {
        count = count + cart[i].quantity;
        total = total + cart[i].price * cart[i].quantity;

        var row = document.createElement("div");
        row.className = "cart-item";

        row.innerHTML =
            "<span>" + cart[i].title + " x" + cart[i].quantity +
            " - $" + (cart[i].price * cart[i].quantity).toFixed(2) + "</span>" +
            "<button onclick='removeFromCart(" + cart[i].id + ")'>Remove</button>";

        cartItems.appendChild(row);
    }

    if (cart.length == 0) {
        cartItems.textContent = "Your cart is empty.";
    }

    document.getElementById("cart-count").textContent = count;
    document.getElementById("cart-total").textContent = total.toFixed(2);
}

// events
searchInput.addEventListener("input", function () {
    howMany = 8;
    showProducts();
});

categorySelect.addEventListener("change", function () {
    howMany = 8;
    showProducts();
});

sortSelect.addEventListener("change", function () {
    showProducts();
});

loadMoreBtn.addEventListener("click", function () {
    howMany = howMany + 8;
    showProducts();
});

getProducts();