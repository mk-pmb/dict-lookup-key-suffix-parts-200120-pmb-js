/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, browser: true */
/*globals define:true*/
(function () {
  'use strict';
  var EX, objHas = Object.prototype.hasOwnProperty;

  function getOwn(o, k, d) { return (objHas.call(o, k) ? o[k] : d); }

  EX = function dictLookupKeySuffixParts(dict, parts, opts) {
    if (!dict) { return false; }
    opts = (opts || false);
    var nPartsTotal = parts.length, skip, partsUsed,
      glue = (opts.glue || ''),
      kPfx = (opts.keyPrefix || ''),
      kSuf = (opts.keySuffix || ''),
      dKeys = Object.keys(dict), nKeys = dKeys.length,
      key, val;
    if (nKeys === 0) { return false; }
    if (nKeys === 1) {
      key = kPfx + kSuf;
      if (dKeys[0] === key) {
        val = dict[key];
        if (val !== undefined) {
          return { key: key, val: val, partsUsed: [],
            nUsed: 0, nSkip: nPartsTotal };
        }
      }
    }
    for (skip = 0; skip <= nPartsTotal; skip += 1) {
      partsUsed = parts.slice(skip);
      key = kPfx + partsUsed.join(glue) + kSuf;
      val = getOwn(dict, key);
      if (val !== undefined) {
        return { key: key, val: val, partsUsed: partsUsed,
          nUsed: partsUsed.length, nSkip: skip };
      }
    }
    return false;
  };



  (function (e) { // UMD export
    /*global define: true */
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function () { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));
}());
