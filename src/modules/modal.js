

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const media = window.matchMedia("(min-width: 768px)");

  let count = 0;
  let idInterval;

  if (media.matches) {
    const animatePopup = () => {
      count = count + 5;
      idInterval = requestAnimationFrame(animatePopup);
      modal.style.display = "block";
      if (count < 100) {
        modal.style.opacity = count + "%";
      } else {
        cancelAnimationFrame(idInterval);
      }
    };
    const unPopup = () => {
      count = count - 5;
      idInterval = requestAnimationFrame(unPopup);

      if (count > 0) {
        modal.style.opacity = count + "%";
      } else {
        cancelAnimationFrame(idInterval);
        modal.style.display = "none";
      }
    };
    buttons.forEach((btn) => {
      btn.addEventListener("click", animatePopup);
    });
    closeBtn.addEventListener("click", unPopup);
  } else {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
};
export default modal;