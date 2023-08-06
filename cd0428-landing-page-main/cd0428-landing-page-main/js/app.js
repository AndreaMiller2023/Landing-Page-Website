/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/  //sections global var
    const sections = Array.from(document.querySelectorAll('section'));
    //menu nav global var
    const menu = document.getElementById('navbar__list');
    let numberOfListItems = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
 * 
 * /   
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
createListItem()

// define a section that loops through all the sections 
    
    function createListItem() {
        for (sec of sections) {
            sectionName = sec.getAttribute('data-nav');
            sectionLink = sec.getAttribute('id');
            // create a listItem for each element
            listItem = document.createElement('li');

            // add text for the item
            listItem.innerHTML = `<a class= 'menu__link' href='#${sectionLink}'>${sectionName}</a>`;

            // add listItem to the menu 
            menu.appendChild(listItem);
        }
    }  



// build the nav


// Add class 'active' to section when near top of viewport34s

function makeActiveClass() {
  const sections = document.querySelectorAll('section');

  //define a function that loops through all the sections
  for (let i = 0; i < sections.length; i++) {
      const section = sections[i];

      const rect = section.getBoundingClientRect();

    // if the section is near the top, add the class "active"
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      
      section.classList.add('your-active-class');
      section.style.cssText = "background-color: gray;";

    //get the nav item at index position "i" and change style
    navLinks[i].style.cssText = 'background-color: gray;';
     
      
      //otherwise, remove the class "active"
    } else {
      section.classList.remove('your-active-class');
      section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

      //get the nav item at index position "i" and change style
      navLinks[i].style.cssText = 'background-color: white;';
    }
  }
}

//add an event listener that calls makeActiveClass when the window is scrolled
window.addEventListener('scroll', makeActiveClass);
 




// Scroll to anchor ID using scrollTO event

  const scrolling = () => {

    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        for(i = 0 ; i<sections ; i++){
          section[i].addEventListener("click", sectionsScroll(link));
        }
      });
    })
  };
  


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click

// get all navigation links
let navLinks = document.querySelectorAll("nav a");

// loop through them
for (let i = 0; i < navLinks.length; i++) {
  // add click event listener
  navLinks[i].addEventListener("click", function(event) {
    // prevent default link behavior
    event.preventDefault();
    // get the target element
    let section = document.getElementById(this.hash.slice(1));
    // scroll to the target element smoothly
    section.scrollIntoView({behavior: "smooth"});
  });
}






