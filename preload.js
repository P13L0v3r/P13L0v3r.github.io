$(document).ready(function () {
    $(".snippet").each(function () {
        var snippetToReplace = $(this);
        var href = snippetToReplace.data("href");
        $.get(href, function (data) {
            snippetToReplace.replaceWith(data);
        })
    });
});