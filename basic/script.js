document.addEventListener("DOMContentLoaded", function() {
    let popupShown = false;

    function showPopup() {
        if (!popupShown) {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
            popupShown = true;

            setTimeout(() => {
                popup.style.display = "none";
            }, 4000); // 1s for slide in + 3s stay
        }
    }

    window.addEventListener("scroll", function() {
        if (!popupShown) {
            showPopup();
        }
    });
});