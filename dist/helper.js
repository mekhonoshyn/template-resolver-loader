'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var TEMPLATE_URL_REGEX = /(\s*)templateUrl:\s*['"`]([\w/-]+\.html)['"`]/g;
var TEMPLATE_URL_REPLACEMENT = '$1template: require(\'$2\')';

exports.transformSource = transformSource;


function transformSource(source) {
    return source.replace(TEMPLATE_URL_REGEX, TEMPLATE_URL_REPLACEMENT);
}