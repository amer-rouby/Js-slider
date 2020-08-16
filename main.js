//get slider items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll(".slide-container img"));

//Get number of slied
var slidesCount = sliderImages.length;

// set Current Slide
var CurrentSlide = 1;

//slide Number string Element
var slideNumberElement = document.getElementById("slide-number");

//previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

//handle click on previous and next button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//Create The Main Ul Element
var paginationElement = document.createElement("ul");

//set Id on created ul Element
paginationElement.setAttribute("id", "pagination-ul");

//creat list items Based On Slides Count
for(var i = 1; i <= slidesCount; i++){
    //Create the li
    var paginationItem = document.createElement("li");

   //set custom Attribute
   paginationItem.setAttribute("date-index", i);
   
   //set  item Content
   paginationItem.appendChild(document.createTextNode(i))

   //Append Items to the main ul
   paginationElement.appendChild(paginationItem);
}

//add the creat ul element to the page
document.getElementById("indicators").appendChild(paginationElement);

//Get the New Created UL
var paginationCreatedUl = document.getElementById("pagination-ul");

//get paginations items | Array.from [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop Through All Bullets Items
for(var i = 0; i< paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function () {
        CurrentSlide = parseInt(this.getAttribute("date-index"));
        theCheckar();
    }
}

//trigger the checker function
theCheckar();


//next slide function
function nextSlide(){
    if(nextButton.classList.contains("disable")){
        //Do Nothing
        return false;
    }else {
        CurrentSlide++;
        theCheckar();
    }
};

//prev slide function
function prevSlide(){
    if(prevButton.classList.contains("disable")){
        //Do Nothing
        return false;
    }else {

        CurrentSlide--;
        theCheckar();
    }
};

//Create The Checer function 
function theCheckar() {
    //set the slide number
    slideNumberElement.textContent = 'Slide #' + (CurrentSlide) + ' of ' + (slidesCount);

        //remve All active Classes
        remveAllActive();

    //set Active Class on current Slide
    sliderImages[CurrentSlide - 1].classList.add("active");

    //set Active class on current pagination item 
    paginationCreatedUl.children[CurrentSlide -1].classList.add("active");

    //check if current slide is the first
    if(CurrentSlide == 1){

        //add Disabled Class on previous Button
        prevButton.classList.add("disabled");
    }else{
         //Remove Disabled Class From previous Button
         prevButton.classList.remove("disabled");
    }
    
    //check if current slide is the last
    if(CurrentSlide == slidesCount){

        //add Disabled Class on next Button
        nextButton.classList.add("disabled");
    }else{
         //Remove Disabled Class From next Button
         nextButton.classList.remove("disabled");
    }
};

//Remove All Active class Form Images and pagination Bullets
function remveAllActive(){

    //loop through images
    sliderImages.forEach(function(img){
        img.classList.remove("active");
    });
    //loop through pagination Bullets
    paginationsBullets.forEach(function(bullet){
        bullet.classList.remove("active");
    });


}