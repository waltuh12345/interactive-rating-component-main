import "../scss/main.scss";
import "animate.css";
import { animate } from "./helper/animation";
const loading = document.querySelector(".loading-container");
const body = document.querySelector("body");

Promise.all([import("./components/ty"), import("./components/form")])
  .then(() => (loading.style.display = "none"))
  .then(() => animate(body, "fadeIn", 800));
