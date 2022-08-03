const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web developer";
    text.style.color = "yellow";
  }, 0);

  setTimeout(() => {
    text.textContent = "freelancer";
    text.style.color = "pink";
  }, 5000);

  setTimeout(() => {
    text.textContent = "Web designer";
    text.style.color = "blue";
  }, 9000);
};
textLoad();
setInterval(textLoad, 12000);
