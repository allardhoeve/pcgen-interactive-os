
var SpellBook = function (options) {
    var select = options.selector;

    var collapse = function (e) {
        $(this).find(".content").addClass("content-hidden");
        $(this).find(".icon-expand").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        $(this).unbind('click').click(expand);
    }

    var expand = function (e) {
        $(this).find(".content").removeClass("content-hidden");
        $(this).find(".icon-expand").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
        $(this).unbind('click').click(collapse);
    }

    $(select).click(expand);
}