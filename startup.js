$(document).ready(function () {
    var drfs = new Array();
    var external = $.Deferred();
    drfs.push(external.promise());

    $(".snippet").each(function () {
        var internal = $.Deferred();
        var snippetToReplace = $(this);
        var href = snippetToReplace.data("href");

        drfs.pop().then(function () {
            $.get(href, function (data) {
                snippetToReplace.replaceWith(data);
            }).done(function () { internal.resolve() }).fail(function () { internal.reject() });
        });
        drfs.push(internal.promise());
    });

    external.resolve("done");

    $.when(drfs).then(function () {
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
});