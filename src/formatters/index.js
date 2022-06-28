import plain from './plain.js';
import pretty from './pretty.js';
import json from './json.js';

const formatters = {
    plain,
    pretty,
    json,
};

export default (ast, format) => {
    try {
        return formatters[format](ast);
    } catch (error) {
        return `Unknown format "${format}"`;
    }
};
