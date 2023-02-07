const target = document.querySelector("#typewriter");
const text = target.innerHTML;
target.innerHTML = "";

const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typespace = document.querySelector("#typespace");

let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    if (text.charAt(i) === " ") {
      typespace.currentTime = 0;
      typespace.play();
    } else {
      const typekey = Math.random() < 0.5 ? typekey1 : typekey2;
      typekey.currentTime = 0;
      typekey.play();
    }
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
};

typeWriter();
