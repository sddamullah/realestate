const contentElement1 = document.querySelector(".form");
const contentElement2 = document.querySelector(".map");
const contentElement3 = document.querySelector(".pform");
const contentElement4 = document.querySelector(".up");
const contentElement5 = document.querySelector(".upp");
const contentElement6 = document.querySelector(".uppp");
const contentElement7 = document.querySelector(".upppp");

// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add different CSS classes to trigger different animations for different elements
      if (entry.target.classList.contains("form")) {
        entry.target.classList.add("animate1");
      } else if (entry.target.classList.contains("map")) {
        entry.target.classList.add("animate2");
      } else if (entry.target.classList.contains("pform")) {
        entry.target.classList.add("animate3");
      } else if (entry.target.classList.contains("up")) {
        entry.target.classList.add("animate4");
      } else if (entry.target.classList.contains("upp")) {
        entry.target.classList.add("animate5");
      } else if (entry.target.classList.contains("uppp")) {
        entry.target.classList.add("animate6");
      } else if (entry.target.classList.contains("upppp")) {
        entry.target.classList.add("animate7");
      }
      
      
      // Disconnect the observer after the animation runs once (optional)
      observer.disconnect();
    }
  });
}

// Set up the intersection observers for different elements
const observer1 = new IntersectionObserver(handleIntersection, {
  threshold: 0.01, // Trigger the callback when 20% of the element is visible
});
const observer2 = new IntersectionObserver(handleIntersection, {
  threshold: 0.01, // Trigger the callback when 20% of the element is visible
});
const observer3 = new IntersectionObserver(handleIntersection, {
  threshold: 0.01, // Trigger the callback when 20% of the element is visible
});
const observer4 = new IntersectionObserver(handleIntersection, {
  threshold: 0.01, // Trigger the callback when 20% of the element is visible
});
const observer5 = new IntersectionObserver(handleIntersection, {
  threshold: 0.01, // Trigger the callback when 20% of the element is visible
});
const observer6 = new IntersectionObserver(handleIntersection, {
  threshold: 0.01, // Trigger the callback when 20% of the element is visible
});
const observer7 = new IntersectionObserver(handleIntersection, {
  threshold: 0.01, // Trigger the callback when 20% of the element is visible
});
// Start observing the target elements
observer1.observe(contentElement1);
observer2.observe(contentElement2);
observer3.observe(contentElement3);
observer4.observe(contentElement4);
observer5.observe(contentElement5);
observer6.observe(contentElement6);
observer7.observe(contentElement7);






 const slideValue = document.querySelector("span");
 const inputSlider = document.querySelector("input");

inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value) + "%";
  slideValue.classList.add("show");
});

inputSlider.onblur = (()=>{
  slideValue.classList.remove("show");
});