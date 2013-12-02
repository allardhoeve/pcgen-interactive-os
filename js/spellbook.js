

var collapsedNavbarCloser = function () {

    var closeNavbarDropdown = function (e) {
        $('.navbar-collapse').collapse('hide');
    }

    $('.navbar-collapse').find('a').click(closeNavbarDropdown)
}


var jQuerySelectors = function () {
    // http://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
    jQuery.expr[':'].textMatches = function(a, i, m) {
        return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
    };
};


var SpellBook = function (options) {
    var select = options.selector;

    var collapse = function (e) {
        e.preventDefault();
        $(this).find(".content").addClass("content-hidden");
        $(this).find(".icon-expand").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
        $(this).unbind('click').click(expand);
    }

    var expand = function (e) {
        e.preventDefault();
        $(this).find(".content").removeClass("content-hidden");
        $(this).find(".icon-expand").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
        $(this).unbind('click').click(collapse);
    }

    $(select).click(expand);
};

var SearchBar = function (options) {
    var formSelector = options.selector;
    var searchFieldSelector = "input#searchfield";

    var getSearchField = function () {
        return $($(searchFieldSelector).get(0));
    };

    var clearSearch = function () {
        $("#spell-wrapper").removeClass("search-filtered");
        $(document).find("li.spell").removeClass("search-show");
    };

    // Event handler for form elements
    var performSearch = function(e) {
        e.preventDefault();
        var input = getSearchField();
        $('.navbar-collapse').collapse('hide');

        if (input.val() == '') {
            clearSearch();
        }
        else {
            $("#spell-wrapper").addClass("search-filtered");
            $(document).find("li.spell").removeClass("search-show");
            $(document).find("li.spell:textMatches('" + input.val() + "')").addClass("search-show");
        }
    };

    var addClearButton = function () {
        var input = getSearchField();

        input.wrap('<span class="search-clear" />');
        input.after($('<span class="search-close">x</span>'));
        input.parent().find(".search-close").click(function (e) {
            input.val('').focus();
            clearSearch();
        });
    };

    $(document).ready(function () {
        $(formSelector).submit(performSearch);
        addClearButton();
    });
};