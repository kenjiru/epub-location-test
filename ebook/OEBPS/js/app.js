$(document).ready(function() {
    var location = JSON.stringify(window.location);

    $("#update-button").click(function() {
        $("#output").text(location);
    });
});
