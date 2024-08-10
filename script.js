let allImage = document.querySelectorAll('.image img')
let gallery = document.querySelector('.gallery')
let galleryImg  = document.querySelector('.gallery__img img')
let galleryClose = document.querySelector('.gallery__close')
let galleryLeft = document.querySelector('.gallery__control.left')
let galleryRight = document.querySelector('.gallery__control.right')



let currentIndex = 0
allImage.forEach(function(item,index){
  item.addEventListener('click', function(){
      currentIndex = index;
      showGallery()
    })
})

function showGallery(){
  if(currentIndex === 0){
    galleryLeft.classList.add("hide")
  }else{
    galleryLeft.classList.remove("hide")
  }
  if(currentIndex === (allImage.length-1)){
    galleryRight.classList.add("hide")
  }else{
    galleryRight.classList.remove("hide")
  }
  galleryImg.src = allImage[currentIndex].src 
  gallery.classList.add("show")
}

function closeGallery(){
    gallery.classList.remove("show")
}
galleryClose.addEventListener('click', closeGallery)

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' || event.key === 'Esc') {
      // Your code here
      gallery.classList.remove("show")
  }
});

galleryLeft.addEventListener('click',function(){
    currentIndex--;
    showGallery()

})

galleryRight.addEventListener('click',function(){
  currentIndex++;
    showGallery()
})