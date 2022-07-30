const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Frontend developer";
    text.style.color = "yellow";
  }, 0);

  setTimeout(() => {
    text.textContent = "freelancer";
    text.style.color = "white";
  }, 4000);

  setTimeout(() => {
    text.textContent = "Web designer";
    text.style.color = "blue";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);
