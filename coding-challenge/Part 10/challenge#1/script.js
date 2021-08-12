'use strict';

const poll = {
  programmingLanguage: ['Javascript', 'Python', 'Rust', 'C++'],
  answers: [0, 0, 0, 0],
  resgisterNewAnswer() {
    const answerEntries = this.programmingLanguage.entries();
    let question = 'What is your favorite programming language?';
    for (const [answerNum, answerStr] of answerEntries) {
      question += `\n ${answerNum}: ${answerStr}`;
    }
    const userAnswer = Number(prompt(question));
    console.log(typeof userAnswer);
    if (typeof userAnswer === 'number' && userAnswer < this.answers.length) {
      this.answers[userAnswer]++;
      // console.log(this.answers);
      this.displayResults('string');
    } else {
      console.log('Input only number and range of 0 - 3!');
    }
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.resgisterNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array');
