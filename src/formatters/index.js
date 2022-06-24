import plain from './plain.js';

const formatters = {
    plain,
};

export default (ast, format) => formatters[format](ast);
