# jQuery plugin providing autofocus

Difference between `.focus()` is that this plugin finds the first `[autofocus]` element in given node and then sets focus to it. Handy in conjunction with AJAX calls.

## Installation

### Bower

`bower install git://github.com/zicher-eu/zicher-jquery-autofocus.git`

### Manual

Get the `jquery.autofocus.min.js` from `dist` catalogue.

## Usage

### RequireJS

Add `jquery.autofocus` to `paths` section of configuration.

### Manual

`<script type="text/javascript" src="jquery.autofocus.min.js"></script>`

## Example

    $("<label>Added input: <input type=\"text\" autofocus=\"autofocus\"/></label>")
        .insertAfter("label:last-of-type")
        .autofocus();