'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.getElementsByTagName('button')[0];
const textArea = document.getElementsByTagName('textarea')[0];

button.addEventListener('click', function () {
  const allWords = textArea.value.split('\n');
  for (const [i, word] of allWords.entries()) {
    if (word.includes('_')) {
      const normalizeWord = word.toLowerCase().trim();
      const endWord = normalizeWord.slice(normalizeWord.indexOf('_') + 1);
      const startWord = normalizeWord.slice(0, normalizeWord.indexOf('_'));
      const capitalizeEndWord = endWord.replace(
        endWord[0],
        endWord[0].toUpperCase()
      );
      console.log(
        startWord.concat(capitalizeEndWord).padEnd(20, ' ') + '✅'.repeat(i + 1)
      );
    }
  }
});
