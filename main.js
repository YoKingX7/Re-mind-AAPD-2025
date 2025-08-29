import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

// 支援頁面上有多組 emotion-group
document.querySelectorAll(".emotion-group").forEach((group) => {
    group.addEventListener("click", (e) => {
        const card = e.target.closest(".emotion-card-tap");
        if (!card || !group.contains(card)) return;

        // 點到同一張：不動作
        if (card.classList.contains("is-active")) return;

        // 清掉舊的，設新的
        group
            .querySelectorAll(".emotion-card-tap.is-active")
            .forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");
    });
});
