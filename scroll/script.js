document.addEventListener("DOMContentLoaded", function() {
    let popupShown = false;

    function showPopup() {
        if (!popupShown) {
            iziToast.show({
                title: 'Welcome!',
                message: 'This is your popup message. Click here to scroll.',
                position: 'bottomRight',
                timeout: 3000, // Duration in milliseconds (3 seconds)
                progressBar: true, // Enable progress bar
                progressBarColor: '#007BFF', // Progress bar color
                transitionIn: 'fadeInRight', // Slide in from the right
                transitionOut: 'fadeOutRight', // Slide out to the right
                onClosed: function() {
                    popupShown = false; // Allow the popup to show again if needed
                },
                onOpening: function(instance, toast) {
                    // Adding the click event listener directly to the toast element
                    toast.addEventListener('click', function() {
                        document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
                    });
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