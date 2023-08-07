//Functions for hiding/showing header for mobile

function hideHeader() {
    const header = document.querySelector('.mobile-menu');
    header.style.display = 'none';
    document.querySelector('.open-button').style.display = 'block';
}

function showHeader() {
    const header = document.querySelector('.mobile-menu');
    header.style.display = 'block';
    document.querySelector('.open-button').style.display = 'none';
}

//Images a part of image gallery. 
const background = 
[
    'images/about-img1.jpg',
    'images/about-img2.jpg',
    'images/about-img3.jpg',
    'images/about-img4.jpg',
    
]

//Setting up a variable called "imageContainer" and storing anyth ng with the class "displayedImage"
const imageContainer = document.getElementById('displayedImage')
//Doing the same with a variable called "switchButton"
const switchButton = document.getElementById('switchButton')

//A function that displays a random image.
function displayRandomImage() {//This equation generates a random image from the background array. 
    //A Random background is chosen when a number is decided randomly to a length of however many elements is in background array. (0-7, so 8 in total)
    let randomBackground = Math.floor(Math.random() * background.length);
    //A src is decided in the <img> tag by calling the "randomBackground" number at random. This sets a number, effecting what is in the HTML code - displaying a random image.
    imageContainer.src = background[randomBackground]
}
//Calling the function.
displayRandomImage()
switchButton.addEventListener('click', displayRandomImage)

//Functionality for the "read more" button in About Page
const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',()=>{
    text.classList.toggle('show-more')
})