// Navbar animation: pull up and drop down
const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = () => {
  if (window.pageYOffset > 300) {
    navbar.classList.remove("top")
    // animation on nav bar
    // pull the nav bar up and out of view
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)"
    }

    // bring the nav bar back into view
    setTimeout(() => {

      navbar.style.transform = "translateY(0)";
      scrolled = true;

    }, 200) // <- how long to wait until we run the operation in the timeout
    
  } else {
    navbar.classList.add("top")
    scrolled = false;
  }
}