btn_up = document.querySelector('.button-up');

document.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust the value as needed
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.addEventListener("scroll", function() {
    if (window.scrollY > 500) { // Adjust the value as needed
        btn_up.style.display = "block";
        btn_up.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    } else {
        btn_up.style.display = "none";
    }
});


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}


// product details page js
    const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// product details page js



shop = document.querySelector('.shop');
shop.addEventListener('click', function() {
    window.location.href = "produc-detalis.html";
});