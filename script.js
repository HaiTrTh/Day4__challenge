let allImage = document.querySelectorAll('.image')

allImage.forEach(function(image){
    image.addEventListener('click', function(e){
       document.querySelector('.image-modal').style.display = "block"
       const clickedElement = e.target;

       // Get the parent element of the clicked element
       const parentElement = clickedElement.parentElement;
       parentElement.classList.add("image_onclick")
      
       document.querySelector('.image-modal__close').onclick = function(){
        document.querySelector('.image-modal').style.display = "none"
        parentElement.classList.toggle("image_onclick")
      }
    })
})

