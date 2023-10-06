
const navBtns = document.querySelectorAll(".navBtn");
const sliderCont = document.querySelector(".slider");
const images = document.querySelectorAll(".photo");
const pictureSize = 480;
let slideIndex = 0;

navBtns.forEach(element => element.addEventListener("click", function(e){
    e.preventDefault();
    scrollToFixed(e);
}))

document.addEventListener("keydown", (e)=>{
    const keyPress = e.key;
    let direction;
    // scroll right (-1)
    // scroll left (1)

    if (keyPress === 'ArrowLeft'){
        direction = -1;
    }
    else if (keyPress === 'ArrowRight'){
        direction = 1;
    }
    scrollRelative(direction);
})

function scrollToFixed(e){
   const dataIndex = e.currentTarget.getAttribute("data-index");
   sliderCont.removeAttribute('style');

   switch(dataIndex)
   {
    case '1':
        classChange("photoOne");
        break;
    case '2':
        classChange("photoTwo");
        break;
    case '3':
        classChange("photoThree");
        break;
    case '4':
        classChange("photoFour");
        break;
    default:
        alert("Something wrong with the class changer");
   }

   function classChange(className){
    sliderCont.classList.remove(sliderCont.classList[1]);
    sliderCont.classList.add(className);
    console.log(`the class ${className} is being added!`);
   }
}

function scrollRelative(direction){
    slideIndex += direction;

   // slideIndex is only purpose is to prevent going beyond the bounds of available images


    if(slideIndex < 0){
        slideIndex = images.length - 1;
        calculateTransform(slideIndex);
    }
    else if(slideIndex >= images.length){
        slideIndex = 0;
        calculateTransform(slideIndex);
    }
    else{
        calculateTransform(slideIndex);
    }
    function calculateTransform(shiftPos){
        console.log(slideIndex);
        // multiplies the slideIndex by the photo size
        const translateX = shiftPos * pictureSize;
        sliderCont.style.transform = `translateX(-${translateX}px)`;
    }
}