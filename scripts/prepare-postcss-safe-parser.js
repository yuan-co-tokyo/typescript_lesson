// postcss-safe-parserがNode 22環境で動作するようにトークナイザの参照を補正
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const targetPath = path.join(projectRoot, 'node_modules', 'postcss-safe-parser', 'lib', 'safe-parser.js');
const replacements = [
  {
    original: "let tokenizer = require('postcss/lib/tokenize')",
    patched: "let tokenizer = require('../node_modules/postcss/lib/tokenize')"
  },
  {
    original: "let Comment = require('postcss/lib/comment')",
    patched: "let Comment = require('../node_modules/postcss/lib/comment')"
  },
  {
    original: "let Parser = require('postcss/lib/parser')",
    patched: "let Parser = require('../node_modules/postcss/lib/parser')"
  }
];

if (!fs.existsSync(targetPath)) {
  // 依存関係がまだインストールされていない場合は何もしない
  process.exit(0);
}

const source = fs.readFileSync(targetPath, 'utf8');

let updatedSource = source;
let didPatch = false;

for (const { original, patched } of replacements) {
  if (updatedSource.includes(patched)) {
    continue;
  }

  if (!updatedSource.includes(original)) {
    console.warn('postcss-safe-parserのsafe-parser.jsが想定外の内容のため、手動での確認が必要です。');
    process.exit(0);
  }

  updatedSource = updatedSource.replace(original, patched);
  didPatch = true;
}

if (didPatch) {
  fs.writeFileSync(targetPath, updatedSource, 'utf8');
  console.log('postcss-safe-parserの内部依存参照を補正しました。');
}
