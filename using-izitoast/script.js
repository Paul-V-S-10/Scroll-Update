document.addEventListener("DOMContentLoaded", function() {
    let popupShown = false;

    function showPopup() {
        if (!popupShown) {
            iziToast.show({
                title: 'Welcome!',
                message: 'This is your popup message.',
                position: 'bottomRight',
                timeout: 3000, // Duration in milliseconds (3 seconds)
                progressBar: true, // Enable progress bar
                progressBarColor: '#007BFF', // Progress bar color
                transitionIn: 'fadeInRight', // Slide in from the right
                transitionOut: 'fadeOutRight', // Slide out to the right
                onClosed: function() {
                    popupShown = false; // Allow the popup to show again if needed
                }
            });

            popupShown = true;
        }
    }

    let scrollCount = 0;
    window.addEventListener("scroll", function() {
        if (!popupShown && scrollCount === 0) {
            showPopup();
            scrollCount++;
        }
    });
});