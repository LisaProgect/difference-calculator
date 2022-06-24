import fs from 'fs';
import _ from 'lodash';

const getParseDataFile = (pathToFile) => {
    const readFile = fs.readFileSync(pathToFile, 'utf8');
    return JSON.parse(readFile);
};

const propertyActions = [
    {
        type: 'nested',
        check: (valueBefore, valueAfter, key) =>
            _.isObjectLike(valueBefore[key]) && _.isObjectLike(valueAfter[key]),
        process: (valueBefore, valueAfter, fn) => ({
            children: fn(valueBefore, valueAfter),
        }),
    },
    {
        type: 'add',
        check: (valueBefore, valueAfter, key) =>
            !_.has(valueBefore, key) && _.has(valueAfter, key),
        process: (__, valueAfter) => ({ valueAfter }),
    },
    {
        type: 'remove',
        check: (__, valueAfter, key) => !_.has(valueAfter, key),
        process: (valueBefore) => ({ valueBefore }),
    },
    {
        type: 'change',
        check: (valueBefore, valueAfter, key) =>
            valueBefore[key] !== valueAfter[key],
        process: (valueBefore, valueAfter) => ({ valueBefore, valueAfter }),
    },
    {
        type: 'unchanged',
        check: (valueBefore, valueAfter, key) =>
            valueBefore[key] === valueAfter[key],
        process: (valueBefore) => ({ valueBefore }),
    },
];

const getPropertyAction = (dataBefore, dataAfter, key) =>
    _.find(propertyActions, ({ check }) => check(dataBefore, dataAfter, key));

const buildAst = (dataBefore, dataAfter) =>
    _.union(_.keys(dataBefore), _.keys(dataAfter)).map((key) => {
        const { type, process } = getPropertyAction(dataBefore, dataAfter, key);
        return {
            key,
            type,
            ...process(dataBefore[key], dataAfter[key], buildAst),
        };
    });

const diff = (pathToFileBefore, pathFileToAfter, format) => {
    const [contentBefore, contentAfter] = [
        pathToFileBefore,
        pathFileToAfter,
    ].map((pathToFile) => getParseDataFile(pathToFile));
    const ast = buildAst(contentBefore, contentAfter);
    console.log(ast);
};

export default diff;
