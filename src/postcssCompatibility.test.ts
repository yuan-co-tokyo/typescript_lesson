import { describe, expect, test } from '@jest/globals';
import fs from 'fs';
import path from 'path';

// 起動時に適用されるpostcss-safe-parser補正を検証
describe('postcss互換性', () => {
  test('safe-parserが補正済みのトークナイザ参照を保持する', () => {
    const safeParserPath = path.join(
      __dirname,
      '..',
      'node_modules',
      'postcss-safe-parser',
      'lib',
      'safe-parser.js'
    );
    const content = fs.readFileSync(safeParserPath, 'utf8');
    expect(content).toContain("let tokenizer = require('../node_modules/postcss/lib/tokenize')");
    expect(content).toContain("let Comment = require('../node_modules/postcss/lib/comment')");
    expect(content).toContain("let Parser = require('../node_modules/postcss/lib/parser')");
  });
});
