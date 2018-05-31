const romaji = require('hepburn').fromKana;
const child_process = require('child_process');

parse = (str) =>
  child_process.execSync('echo "' + str + '" | mecab | sed s/.*,//g',
      { input: str, encoding: 'utf8' }).split('\n').slice(0,-2);

module.exports = { toSlug: (string) =>
  parse(string).map((token) =>
    romaji(token).toLowerCase().replace(/[āēīōū]/g, function(match) {
      return {
        "ā": "aa",
        "ē": "ee",
        "ī": "ii",
        "ō": "oo",
        "ū": "uu"
      }[match];
    })
  ).join('-')
}
