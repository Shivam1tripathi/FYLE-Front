const popupform=document.querySelector(".popup-form");
const Contactus=document.querySelector(".Contact-us");
let visible="hidden";
Contactus.addEventListener("click",()=>{
    if(visible=="visible"){
        popupform.style.visibility = "hidden";
        visible="hidden";
    }else{
    popupform.style.visibility = "visible";
    visible="visible";
    }
})




let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }
    const offset = -currentSlideIndex * 100 / 3;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    updateDots();
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

// // Auto-slide functionality
// setInterval(() => {
//     changeSlide(1);
// }, 3000);

// Initialize the first slide
showSlide(currentSlideIndex);











const images = [
    'images/85386506.jpg',
    'images/froots.png',
    'images/OIP.jpg'
];

function changeImage(index) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = images[index];

    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}