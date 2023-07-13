import { svg } from "./svg";

const renderHtml = (ratings = 0) => {
  let thankYouStateHtml = ` <div class="state-end small-container">
      <section>
        <div>${svg}</div>
        <div id="seclected-num">You selected ${ratings} out of 5</div>
      </section>
      <section>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      </section>
    </div>`;
  main.innerHTML = thankYouStateHtml;
};

const main = document.querySelector("main");

export { renderHtml };
