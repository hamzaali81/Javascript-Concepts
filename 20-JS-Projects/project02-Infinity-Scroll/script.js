const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'I7T3pA0bWvVvJ4IHr2kcWhEBe87RTNq8xJLiJ2e3Nh0';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

 // Check if all images were loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    console.log(imagesLoaded, totalImages);
    ready = true;
    loader.hidden = true;
  }
}

const setAttributes = (element,attributes)=> {
  for(let key in attributes) {
    element.setAttribute(key,attributes[key])
  }
};

async function displayPhotos() {
  totalImages = photosArray.length;
   photosArray.forEach((photo)=> {
    const item = document.createElement('a'); 
   setAttributes(item, {  
      href: photo.links.html,
      target: '_blank',
   });

   const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.appendChild(img);
    imageContainer.appendChild(item);

    img.addEventListener('load', imageLoaded);
  });
  
}

async function getPhotos() {
    try {
     const getData = await fetch(apiUrl);
     photosArray = await getData.json();
     displayPhotos();
    } catch(error) {
    console.log(error);
    } 
};

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    console.log(window.innerHeight + window.scrollY);
    ready = false;
    getPhotos();
  }
});

// Onload
getPhotos();


























