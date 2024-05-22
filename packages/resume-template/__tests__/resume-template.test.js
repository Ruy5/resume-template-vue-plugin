'use strict';

const resumeTemplate = require('..');
const assert = require('assert').strict;

assert.strictEqual(resumeTemplate(), 'Hello from resumeTemplate');
console.info('resumeTemplate tests passed');
