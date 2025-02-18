const MkCard = document.querySelector(".MKSectionPage");
const MkCardToggle = document.querySelector(".toggle");
MkCardToggle.onclick = function () {
  MkCard.classList.toggle("active");
};

document.body.addEventListener("click", (e) => {
  const element = document.createElement("span");
  element.className = "mk-cursor";
  element.style.left = e.clientX - 10 + "px";
  element.style.top = e.clientY - 10 + "px";

  document.body.append(element);
  setTimeout(() => {
    element.remove();
  }, 5000);
});
