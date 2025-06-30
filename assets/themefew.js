
document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.querySelector("#shopify-block-AeE5iVlZsN2NRZ2c3R__icon_DWWfVA");
    const target = document.querySelector("#shopify-section-template--19686071468256__section_an6z8t");

    if (trigger && target) {
        trigger.addEventListener("click", function (e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        });
    }
});