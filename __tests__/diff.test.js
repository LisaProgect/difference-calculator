import fs from 'fs';
import { test } from '@jest/globals';
import path from 'path';
import _ from 'lodash';
import { fileURLToPath } from 'url';
import genDiff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fullPathToDir = path.join(__dirname, '..');

const getFixturePath = (filename, dir = fullPathToDir) =>
    path.join(dir, '__fixtures__', filename);

test.each([['.json', 'plain']])(
    'genDiff extension %s format %s',
    (extension, format) => {
        const expected = fs
            .readFileSync(
                getFixturePath(`result${_.upperFirst(format)}.txt`),
                'utf-8'
            )
            .trim();

        const absolutePathBefore = getFixturePath(`before${extension}`);
        const absolutePathAfter = getFixturePath(`after${extension}`);
        const actual = genDiff(absolutePathBefore, absolutePathAfter, format);

        expect(actual).toBe(expected);

        const relativePathsAfter = getFixturePath(`after${extension}`, '.');
        const relativePathsBefore = getFixturePath(`before${extension}`, '.');
        const actual2 = genDiff(
            relativePathsBefore,
            relativePathsAfter,
            format
        );

        expect(actual2).toBe(expected);
    }
);
