document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");

  function typeText(element, text, delay = 100) {
    let index = 0;
    element.textContent = "";
    const interval = setInterval(() => {
      element.textContent += text[index];
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, delay);
  }

  typeText(title, "Drive Your Dreams with Us", 100);
  setTimeout(() => typeText(subtitle, "Discover Excellence in Every Ride!", 100), 2500);
});
