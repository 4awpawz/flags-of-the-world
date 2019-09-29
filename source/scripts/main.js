window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("catalog-link").addEventListener("click", event => {
        event.preventDefault();
        window.history.back();
    });
});