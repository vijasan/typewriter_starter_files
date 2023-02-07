// Select the target element
const target = document.querySelector("#typewriter");

// Get the innerHTML of the target
const text = target.innerHTML;

// Reset the innerHTML of the target
target.innerHTML = "";

// Select audio elements
const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typespace = document.querySelector("#typespace");

// Initialize index for text
let i = 0;

// Define the typeWriter function
const typeWriter = () => {
  // Continue typing if there is text left
  if (i < text.length) {
    // Play audio based on character
    if (text.charAt(i) === " ") {
      typespace.currentTime = 0;
      typespace.play();
    } else {
      const typekey = Math.random() < 0.5 ? typekey1 : typekey2;
      typekey.currentTime = 0;
      typekey.play();
    }

    // Append the current character
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
};

// Start the animation
typeWriter();
