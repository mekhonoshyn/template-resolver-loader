import {transformSource} from './helper';

const IS_RAW = true;

export {
    templateResolverLoader as default,
    IS_RAW as raw
};

function templateResolverLoader(source) {
    this.cacheable();

    return transformSource(source.toString());
}
