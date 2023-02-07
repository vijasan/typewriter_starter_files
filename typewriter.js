// Select the target element with the id "typewriter"
const target = document.querySelector("#typewriter");

// Get the innerHTML of the target element
const text = target.innerHTML;

// Set the innerHTML of the target element to an empty string
target.innerHTML = "";

// Select audio elements with id "typekey1" and "typekey2"
const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");

// Select audio element with id "typespace"
const typespace = document.querySelector("#typespace");

// Initialize index for text string
let i = 0;

// Define the typeWriter function
const typeWriter = () => {
  // If there is still text to be typed
  if (i < text.length) {
    // Check if the current character is a space
    if (text.charAt(i) === " ") {
      // If so, reset the audio and play it
      typespace.currentTime = 0;
      typespace.play();
    } else {
      // Otherwise, choose one of the typekey audio elements randomly
      const typekey = Math.random() < 0.5 ? typekey1 : typekey2;
      // Reset the audio and play it
      typekey.currentTime = 0;
      typekey.play();
    }
    // Append the current character to the target element
    target.innerHTML += text.charAt(i);
    // Increase the index
    i++;
    // Call the typeWriter function after 50 milliseconds
    setTimeout(typeWriter, 50);
  }
};

// Invoke the typeWriter function to start the animation
typeWriter();
