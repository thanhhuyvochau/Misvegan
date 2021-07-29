$(document).ready(function() {
    $('.toggle-button-mb a').prevet
    $(".toggle-button-mb a").click(function(event) {
        event.preventDefault();
        $(".mobile-links").slideToggle(300);
    });
    $(".multil-links-mb").click(function(event) {
        event.preventDefault();
        $(".sub-menu-wrapper").slideToggle(150);
    })
});