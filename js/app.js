$(document).ready(function () {
    $(".gallery-img > i").click(function () {
        const winViewImageLink = $(this).next("img").attr("src");
        $(".window").addClass("active");
        $(".win-view > img").attr("src", winViewImageLink);
    });
    $(".win-close").click(function () {
        $(".window").removeClass("active");
    });
});