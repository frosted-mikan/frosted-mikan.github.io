/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//For loading animation 
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded"); 
});



// let mainNavLinks = document.querySelectorAll("a");
// window.addEventListener("scroll", event => {
//     let fromTop = window.scrollY;
  
//     mainNavLinks.forEach(link => {
//       let section = document.querySelector(link.hash);
  
//       if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
//         link.classList.add("active");
//       } else {
//         link.classList.remove("active");
//       }
//     });
//   });
  
//Image Expansion Script
var modal = document.getElementById('myModal');
var slideIndex = 1;
function slide(n) {
    slideIndex = n;
    var i = 'img' + n.toString();
    var img = (document.getElementById(i));
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
            var height = img.width;
        captionText.style.marginTop = height;

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
}

//previous slide
function previousSlide() {
    slide(slideIndex - 1);
}
    
//next slide
function nextSlide() {
    slide(slideIndex + 1);
}
    

