$(document).ready(function () {
    $("#btn").click(function () {
        $("#nav").slideToggle("slow");
        $(this).toggleClass("active");
    });
});