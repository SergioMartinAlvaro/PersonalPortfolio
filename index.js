window.onscroll = function() {
    this.showPresentation(window.scrollY);
    this.handleNavbarColor(window.scrollY);
  };

function showPresentation(position) {
    if(position > 450) {
        document.getElementById("presentation-image").classList.add("show-top");
        document.getElementById("presentation-text").classList.add("display-from-left");

    }
}

function handleNavbarColor(position) {
    if(position > 1180) {
        document.getElementById("navbar").classList.add("navbar-light");
        document.getElementById("navbar").classList.remove("navbar-dark");
        document.getElementById("navbar").classList.remove("solid-bg");
        document.getElementById("navbar").classList.add("transparent-bg");

    } else if(position < 1180 && position > 570) {
        document.getElementById("navbar").classList.add("navbar-dark");
        document.getElementById("navbar").classList.remove("navbar-light");
        document.getElementById("navbar").classList.remove("transparent-bg");
        document.getElementById("navbar").classList.add("solid-bg");
    } else {
        document.getElementById("navbar").classList.add("navbar-light");
        document.getElementById("navbar").classList.remove("navbar-dark");
        document.getElementById("navbar").classList.remove("solid-bg");
        document.getElementById("navbar").classList.add("transparent-bg");
    }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});