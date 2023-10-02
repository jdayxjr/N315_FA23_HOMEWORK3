$(document).ready(function () {
    // Function to load view based on URL hash
    function loadViewFromURL() {
        var hash = window.location.hash;
        var viewId = hash.slice(1) + "-view"; // Construct view id based on hash

        // Hide all views
        $("#content > div").hide();

        // Show the view corresponding to the hash
        $("#" + viewId).show();
    }

    // Initial load based on URL hash
    loadViewFromURL();

    // Listen for hash changes to enable navigation
    $(window).on("hashchange", function () {
        loadViewFromURL();
    });
});
