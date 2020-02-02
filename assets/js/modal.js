document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("login-modal").style.display = "none";
  });

  document.querySelector(".open-modal").addEventListener("click", () => {
    document.getElementById("login-modal").style.display = "flex";
  });

  window.addEventListener("scroll", () => {
    let scrollVal = window.scrollY;
    console.log(scrollVal);
    if (scrollVal > 186) {
      document.getElementById("main-menu").classList.add("simple-menu");
      document.getElementById("scroll-main-menu").style.display = "block";
    }
    if (scrollVal < 186) {
      document.getElementById("main-menu").classList.remove("simple-menu");
      document.getElementById("scroll-main-menu").style.display = "none";
    }
  });
});
