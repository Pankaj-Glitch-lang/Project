const slider = document.querySelector('.slideShow');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let logo=document.getElementById("Logo");
let women=document.getElementById("Women");
let men=document.getElementById("Men");
let MyAccountpage=document.getElementsByClassName("belowSection");
let Aboutus=document.getElementById("ABOUTUS");


// MyAccountpage.addEventListener('click', function(e){

//   location.href="SignIn.html";
// })

women.addEventListener('click', function(e){

  location.href=("ProductPage.html")
  // this.style.backgroundColor="gray"
})

  men.addEventListener('click', function(e){

    location.href=("ProductPage.html")
    // this.style.backgroundColor="gray"
  })



let slidePosition = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

logo.addEventListener('click', function(){

  location.href=" index.html";
})

function updateSliderPosition() {
    slider.style.transform = `translateX(${-slidePosition * 25}%)`; // Translate based on slide width (25%)
}

function nextSlide() {
    if (slidePosition < totalSlides - 4) {
        slidePosition=slidePosition+4;
        updateSliderPosition();
    }
}

function prevSlide() {
    if (slidePosition > 0) {
        slidePosition=slidePosition-4;
        updateSliderPosition();
    }
    
}


// Get the button and popup content elements
const button = document.getElementById('loginButton');
const popupContent = document.getElementById('accountcontent');
const PopupHide=document.getElementById('accountcontent')

// Function to show the popup when hovering over the button
function showPopup() {
  popupContent.style.display = 'block';
}

// Function to hide the popup when the mouse leaves the button
function hidePopup() {
  popupContent.style.display = 'none';
}


// Add event listeners for mouse hover
button.addEventListener('mouseenter', showPopup);
PopupHide.addEventListener('mouseleave',hidePopup)

// Close the popup if the user clicks outside of it (optional)
document.addEventListener('click', function(event) {
  if (!button.contains(event.target) && !popupContent.contains(event.target)) {
    popupContent.style.display = 'none';
  }
});

// let shopNow=document.getElementById("ShopNow");
// shopNow.addEventListener('click', function(e){
//   location.href="ProductPage.html"
// })

let container = document.getElementById("prodContainer");

let data = [];

// get the data
      fetch("https://fakestoreapi.com/products")
        .then(function (res) {
          return res.json();
     })
          .then(function (res) {
           displayData(res);
     });

            function displayData(data) {
              data.forEach(function (product) {
                let div = document.createElement("div");
                

                let productImg = document.createElement("img");

                productImg.src = product.image;

                let title = document.createElement("p");

                title.innerText = product.title;

                let price = document.createElement("p");

                price.innerText = "INR : " + product.price;
                let addTocart=document.createElement("button");
                let BuyButton=document.createElement("button");
                addTocart.textContent="Add To Cart";
                BuyButton.textContent="Buy Now";

                div.append(productImg, title, price,addTocart, BuyButton);

                container.append(div);
              });
            }

            let shopNow=document.getElementById("ShopNow");
            shopNow.addEventListener('click', function(e){
              location.href="ProductPage.html"
            })


            Aboutus.addEventListener('click', function(e){

              location.href="AboutUs.html"
            })

           
            
            

         





