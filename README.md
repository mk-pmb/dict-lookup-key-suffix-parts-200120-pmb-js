
<!--#echo json="package.json" key="name" underline="=" -->
dict-lookup-key-suffix-parts-200120-pmb
=======================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Can be used to look up the most specific value for a multi-part filename
extension or domain name.
<!--/#echo -->



API
---

This module exports one function:

### dictLookupKeySuffixParts(dict, parts[, opts])

Returns `false` if no `dict` entry matches.
If a matching entry is found, returns an object with these properties:

* `key` and `val`: The matching entry.
* `partsUsed`: An array of the `parts` that were used.
* `nUsed`: The number of parts used.
* `nSkip`: The number of parts skipped.

`opts` is an optional options object that supports these keys (all optional):

* `glue`: A string to put between parts. For lookups of domains or
  file name extensions, you'll probably want to set this to `'.'`.
* `keyPrefix`: A string to put in front of the glued-together key parts.
* `keySuffix`: A string to append to the glued-together key parts.



Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
