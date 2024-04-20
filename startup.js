$(document).ready(function () {

    $(".snippet").each(async function () {
        var snippetToReplace = $(this);
        var href = snippetToReplace.data("href");

        await $.get(href, function (data) {
            snippetToReplace.replaceWith(data);
        });
    });
});

$(window).on("load", function () {
    $(".custom-button").hover(
        function () {
            $(this).removeClass("raised");
        },
        function () {
            $(this).addClass("raised");
            $(this).removeClass("pressed");
        }
    );
    $(".custom-button")
        .on("mousedown", function () {
            $(this).addClass("pressed");
        })
        .on("mouseup", function () {
            $(this).removeClass("pressed");
        });
    $(".custom-button")
        .on("click", function () {
            var href = $(this).data("href");
            window.location.href = href;
        });
    $("td").each(function () {
        var parent = $(this).parent();
        var rowspan = $(this).attr("rowspan") ? parseInt($(this).attr("rowspan")) : 1;
        if (rowspan + parent.index() == parent.parent().children().length) {
            $(this).addClass("bottom-row");
        }
    });
    $(".hide-until-load").show();
})