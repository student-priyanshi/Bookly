const books = [
    "Let The Snog Fest Begin",
    "The Captains Treasure",
    "Lizzie of Langley Street",
    "The Goose Girl",
    "Murder at the happy home for the Aged",
    "Treasure Island",
    "Pilgrimage",
    "Catherin Cookson",
    "Erase The Ego",
    "PackUp Your Troubles",
    "Harry and the Wrinklies",
    "Naishapur and Babylon",
    "The Tilburry Poppies",
    "Twice upon a time",
    "East End Angel",
    "No Greater Love",
    "The Appeal",
    "Beach Party",
    "Love in Another Town",
    "Juniors",
    "The Daevinci Code",
    "The edge of Reason",
    "Catherine Cookson",
    "A Christmas Cracker",
    "Pack up your Troubles",
];

const searchBox = document.getElementById('search-box');
const suggestionsList = document.getElementById('suggestions');

searchBox.addEventListener('input', function() {
    const query = searchBox.value.toLowerCase();
    const suggestions = books.filter(book => book.toLowerCase().includes(query));

    // Display suggestions
    suggestionsList.innerHTML = '';
    if (suggestions.length > 0 && query !== '') {
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.textContent = suggestion;
            li.addEventListener('click', function() {
                searchBox.value = suggestion;
                suggestionsList.innerHTML = '';
            });
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
});

// Hide suggestions list when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-form')) {
        suggestionsList.style.display = 'none';
    }
});

function toggleLike(heartIcon) {
    // Log the current heart state
    console.log("Heart clicked", heartIcon);

    // Toggle the 'liked' class
    heartIcon.classList.toggle('liked');
    console.log("Liked class added?", heartIcon.classList.contains('liked'));

    // Like count logic
    let likeCountElement = heartIcon.nextElementSibling;
    let currentCount = parseInt(likeCountElement.innerText);
    
    if (heartIcon.classList.contains('liked')) {
        likeCountElement.innerText = currentCount + 1;
    } else {
        likeCountElement.innerText = currentCount - 1;
    }
}

// Function to update cart count and icon color
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartIconElement = document.querySelector('.cart-icon');
    let currentCount = parseInt(cartCountElement.textContent, 10);
    
    // Increase count
    cartCountElement.textContent = currentCount + 1;
    
    // Check if the count is greater than zero
    if (currentCount + 1 > 0) {
      cartIconElement.classList.add('has-items');
    }
  }
  
  // Event listener for 'Add to Cart' buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', updateCartCount);
  });
  

function showBookDetails(title, author, image, price, summary) {
    // Set the book details in the modal
    document.getElementById('book-title').innerText = title;
    document.getElementById('book-author').innerText = 'Author: ' + author;
    document.getElementById('book-price').innerText = 'Price: ' + price;
    document.getElementById('book-summary').innerText = summary;
    document.getElementById('book-image').src = image;

    // Add stars to reviews (example: 4 stars)
    const reviewStars = document.getElementById('book-reviews');
    reviewStars.innerHTML = ''; // Clear existing stars
    for (let i = 0; i < 5; i++) { // Example: 5 stars
        reviewStars.innerHTML += '<span class="star fas fa-star"></span>';
    }

    // Display the modal
    document.getElementById('book-details-modal').classList.add('active');
}

// Close modal
document.getElementById('close-modal-btn').onclick = function() {
    document.getElementById('book-details-modal').classList.remove('active');
};

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('book-details-modal')) {
        document.getElementById('book-details-modal').classList.remove('active');
    }
};

// Initialize Swiper
var swiper = new Swiper('.books-slider', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Other UI interactions
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};


window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
};



document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".featured-slider", {
        loop: false, // Disable loop mode if there are not enough slides
        slidesPerView: 5, // Adjust according to your needs
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });
});

var swiper = new Swiper(".arrivals-slider", {
    loop: true, // Enable loop for smoother navigation
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 }, // Mobile devices
        640: { slidesPerView: 2 }, // Small tablets
        768: { slidesPerView: 3 }, // Medium devices
        1024: { slidesPerView: 5 }, // Large devices
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true, // Enable loop for smoother navigation
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 }, // Mobile devices
        640: { slidesPerView: 2 }, // Small tablets
        768: { slidesPerView: 3 }, // Medium devices
        1024: { slidesPerView: 5 }, // Large devices
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true, // Enable loop for smoother navigation
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        320: { slidesPerView: 1 }, // Mobile devices
        640: { slidesPerView: 2 }, // Small tablets
        768: { slidesPerView: 3 }, // Medium devices
        1024: { slidesPerView: 5 }, // Large devices
    },
});

// Get form elements
let loginForm = document.getElementById('login-form');
let signupForm = document.getElementById('signup-form');
let forgotPasswordForm = document.getElementById('forgot-password-form');

// Open Sign Up form
document.getElementById('create-account-link').onclick = function() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
};

// Open Forgot Password form
document.getElementById('forgot-password-link').onclick = function() {
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'flex';
};

// Back to Login from Sign Up
document.getElementById('login-link').onclick = function() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
};

// Back to Login from Forgot Password
document.getElementById('login-link-from-forgot').onclick = function() {
    forgotPasswordForm.style.display = 'none';
    loginForm.style.display = 'flex';
};

// Close buttons functionality
document.getElementById('close-login-btn').onclick = function() {
    loginForm.style.display = 'none';
};

document.getElementById('close-signup-btn').onclick = function() {
    signupForm.style.display = 'none';
};

document.getElementById('close-forgot-password-btn').onclick = function() {
    forgotPasswordForm.style.display = 'none';
};

// When the profile icon is clicked, show the login form
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block'; // Show login form
});



let cart = []; // Array to store cart items

// Function to add a book to the cart
function addToCart(book) {
    const existingBook = cart.find(item => item.title === book.title);
    
    if (existingBook) {
        existingBook.quantity++;
    } else {
        cart.push({...book, quantity: 1});
    }
    
    updateCartUI();
}

// Function to remove a book from the cart
function removeFromCart(title) {
    cart = cart.filter(item => item.title !== title);
    updateCartUI();
}

// Function to update the cart UI and calculate the total
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        totalPrice += subtotal;

        cartItems.innerHTML += `
            <tr>
                <td><img src="${item.image}" alt="${item.title}" width="50"></td>
                <td>${item.title}</td>
                <td>$${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.title}', this.value)">
                </td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button onclick="removeFromCart('${item.title}')">Remove</button></td>
            </tr>
        `;
    });
    
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    // Update the cart count in the cart icon
    document.getElementById('cart-count').textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Function to update the quantity of a book
function updateQuantity(title, quantity) {
    const book = cart.find(item => item.title === title);
    if (book) {
        book.quantity = parseInt(quantity);
    }
    updateCartUI();
}

// Function to show the book details in the modal
function showBookDetails(title, author, image, price, summary) {
    document.getElementById('book-title').textContent = title;
    document.getElementById('book-author').textContent = author;
    document.getElementById('book-image').src = image;
    document.getElementById('book-price').textContent = price;
    document.getElementById('book-summary').textContent = summary;

    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.onclick = function() {
        addToCart({
            title: title,
            price: parseFloat(price.replace('$', '')),
            image: image
        });
    };

    // Show the modal
    document.getElementById('book-details-modal').style.display = 'block';
}

// Function to hide the modal
document.getElementById('close-modal-btn').addEventListener('click', function() {
    document.getElementById('book-details-modal').style.display = 'none';
});

// Show the cart when the cart icon is clicked
document.getElementById('cart-icon').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cart').style.display = 'block';
});

// Hide the cart when the close button is clicked
document.getElementById('close-cart-btn').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'none';
});



// Function to show the cart overlay when the cart icon is clicked
document.getElementById('cart-icon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag

    // Show the cart overlay
    const cartOverlay = document.getElementById('cart-overlay');
    cartOverlay.style.display = 'flex'; // Use flex to center the cart content
});

// Function to hide the cart overlay when the close button (X) is clicked
document.getElementById('close-cart-btn').addEventListener('click', function() {
    const cartOverlay = document.getElementById('cart-overlay');

    // Hide the cart overlay
    cartOverlay.style.display = 'none';
});


document.getElementById('proceed-to-payment').addEventListener('click', function() {
    window.location.href = 'BOOKLY/pay.html'; // Navigate to payment page
});

document.getElementById('proceed-to-payment').addEventListener('click', function() {
    // Redirect to the payment page
    window.location.href = 'pay.html';
});


// Function to load a JavaScript file dynamically
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}




