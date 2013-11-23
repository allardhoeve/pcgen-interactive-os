# Interactive outputsheet for PCGen

This is an attempt to create a modern spell book sheet for PCGen characters.

1. It currently only works well for single-class characters.
1. I've tested it for a level 9 cleric only :)


## How to use it

Either:
* Put interactive.htm in your PCGen folder, under `outputsheets/d20/fantasy/htmlxml`. Name it `csheet_interactive.htm`.
* Or create a symlink from that location to `interactive.htm`.

Then use PCGen to output a sheet. Put it in `spellbook.html`, so the JS and CSS requirements are met. 

Alternatively, copy the `css`, `js`, `fonts` and `less` directories over.


## How to edit the HTML outputsheet

This is a mixture of HTML and PCGen templating. Please see:

* http://www.pcgen.org/autobuilds/pcgen-docs/ (click `Output Sheet Token Index` in the menu)
* http://wiki.pcgen.org/Template_Engine


## How to edit the CSS

The CSS is generated through [lessc](http://lesscss.org/). Edit the .less files, then generate the CSS files. Or put a watcher on the files in PyCharm or the like. 
