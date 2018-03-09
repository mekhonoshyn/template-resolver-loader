const TEMPLATE_URL_REGEX = /(\s*)templateUrl:\s*['"`]([\w/-]+\.html)['"`]/g;
const TEMPLATE_URL_REPLACEMENT = '$1template: require(\'$2\')';

export {transformSource};

function transformSource(source) {
    return source.replace(TEMPLATE_URL_REGEX, TEMPLATE_URL_REPLACEMENT);
}
