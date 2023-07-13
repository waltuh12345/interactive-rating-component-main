import { renderHtml } from "./ty";
import { isAnimating, animate } from "../helper/animation";

const ratingsBtnWrapper = document.querySelector("#ratings-btn-wrapper");
const btn = Array.from(ratingsBtnWrapper.children);

let selectedRating = "";
const ratings = [1, 2, 3, 4, 5];

const submitBtn = document.querySelector("#submit-btn");

for (let i = 0; i < ratings.length; i++) {
  btn[i].addEventListener("click", (e) => {
    selectedRating = ratings[i];
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (selectedRating === "") {
    selectedRating = 0;
  }

  animate(form, "fadeOut", 500).then(() => {
    form.style.display = "none";
    renderHtml(selectedRating);
    const modal = document.querySelector(".state-end");
    return animate(modal, "fadeIn", 900);
  });
});
