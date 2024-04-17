$(document).ready(function () {
    $(".nav-box td").hover(
        function () {
            $(this).removeClass("raised");
        },
        function () {
            $(this).addClass("raised");
        }
    );
    $(".nav-box td")
        .on("mousedown", function () {
            $(this).addClass("pressed");
        })
        .on("mouseup", function () {
            $(this).removeClass("pressed");
        });
    $(".nav-box td")
        .on("click", function () {
            var href = $(this).data("href");
            window.location.href = href;
        });
    $(".hide-until-load").show();
});