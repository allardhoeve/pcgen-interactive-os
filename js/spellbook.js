
var SpellBook = function (options) {
    var select = options.selector;

    var collapse = function (e) {
        $(this).find(".content").slideUp();
        $(this).find(".icon-expand").show();
        $(this).find(".icon-collapse").hide();
        $(this).unbind('click').click(expand);
    }

    var expand = function (e) {
        $(this).find(".content").slideDown();
        $(this).find(".icon-expand").hide();
        $(this).find(".icon-collapse").show();
        $(this).unbind('click').click(collapse);
    }

    $(select).click(expand);
}