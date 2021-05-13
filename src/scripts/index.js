import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const btn_nav_mobile = document.getElementById("nav-drawwer");
const handle_drawwer = document.querySelector(".header");
const nav_DrawwerMobile = document.getElementById("nav-drawwer_mobile");

btn_nav_mobile.addEventListener("click", function () {
  nav_DrawwerMobile.classList.toggle("show-menu-mobile");
});

handle_drawwer.addEventListener("click", function () {
  nav_DrawwerMobile.classList.remove("show-menu-mobile");
});
