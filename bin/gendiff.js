#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../index.js';

program
    .version('1.0.0')
    .description('Compares two configuration files and shows the difference.')
    .option('-f, --format [type]', 'output format', 'plain')
    .arguments('<firstPathToFile> <secondPathToFile>')
    .action((firstPathToFile, secondPathToFile) => {
        console.log(
            genDiff(firstPathToFile, secondPathToFile, program.opts().format)
        );
    })
    .parse();
