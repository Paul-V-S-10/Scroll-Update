document.addEventListener("DOMContentLoaded", function() {
    let popupShown = false;
    let sliderFilled = false;

    function showPopup() {
        if (!popupShown) {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
            setTimeout(() => {
                popup.classList.add("show");
                fillSlider();
            }, 10); // Delay to ensure transition

            popupShown = true;

            setTimeout(function() {
                popup.classList.remove("show");
                setTimeout(() => {
                    popup.style.display = "none";
                    resetSlider();
                }, 500); // Wait for the transition to finish before hiding
            }, 3000); // Hide popup after 3 seconds
        }
    }

    function fillSlider() {
        if (!sliderFilled) {
            const slider = document.getElementById("slider");
            slider.style.width = "100%";
            sliderFilled = true;
        }
    }

    function resetSlider() {
        const slider = document.getElementById("slider");
        slider.style.width = "0%";
        sliderFilled = false;
    }

    let scrollCount = 0;
    window.addEventListener("scroll", function() {
        if (!popupShown && scrollCount === 0) {
            showPopup();
            scrollCount++;
        }
    });
});