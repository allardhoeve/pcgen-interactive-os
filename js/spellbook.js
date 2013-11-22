
var SpellBook = function (options) {
    var select = options.selector;

    var collapse = function (e) {
        console.log("collapse");
        var elements = $(this).find(".content");
        var content = $(elements[0]);
        content.slideUp();
        $(this).unbind('click').click(expand);
    }

    var expand = function (e) {
        console.log("expand");
        var elements = $(this).find(".content");
        var content = $(elements[0]);
        content.slideDown();
        $(this).unbind('click').click(collapse);
    }

    $(select).click(expand);
}