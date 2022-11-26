const btn = document.getElementById("button");
const scrollToTop = () => {
  btn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

scrollToTop();
