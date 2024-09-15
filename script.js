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


