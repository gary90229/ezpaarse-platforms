#!/usr/bin/env node

'use strict';
const Parser = require('../.lib/parser.js');

/**
 * Recognizes the accesses to the platform Bibliographie Der Deutschen Sprach- Und Literaturwissenschaft  (BDSL)
 * @param  {Object} parsedUrl an object representing the URL to analyze
 *                            main attributes: pathname, query, hostname
 * @param  {Object} ec        an object representing the EC whose URL is being analyzed
 * @return {Object} the result
 */
module.exports = new Parser(function analyseEC(parsedUrl, ec) {
  let result = {};
  let path = parsedUrl.pathname;
  let query = parsedUrl.query || {};

  if (/^\/[a-z-]+\/suche\/Titelaufnahme\.xml$/i.test(path) && query.Publikation_ID) {
    // /blldb/suche/Titelaufnahme.xml?vid=9F1F3B70-D0B8-466B-ACBD-B3F6DF360ADC&erg=0&Anzeige=10&Sprache=de&contenttype=text/html&Skript=titelaufnahme&Publikation_ID=457966009
    result.rtype  = 'REF';
    result.mime   = 'HTML';
    result.unitid = query.Publikation_ID;
  }

  return result;
});
