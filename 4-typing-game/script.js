const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words = [];
let wordIndex = 0;

let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

// game start logic
document.getElementById('start').addEventListener('click', () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  words = quote.split(' ');
  wordIndex = 0;

  const spanWords = words.map(word => `<span>${word} </span>`);
  quoteElement.innerHTML = spanWords.join('');
  quoteElement.childNodes[0].className = 'highlight';
  messageElement.innerText = '';

  typedValueElement.value = '';
  typedValueElement.focus();

  startTime = new Date().getTime();
});


typedValueElement.addEventListener('input', () => {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    const elaspedTime = new Date().getTime() - startTime;
    const message = `CONGRATULAIONS! You finished in ${elaspedTime / 1000} seconds.`;
    messageElement.innerText = message;
  }
  else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word & same word
    typedValueElement.value = '';
    quoteElement.childNodes[wordIndex].className = '';
    wordIndex++;
    quoteElement.childNodes[wordIndex].className = 'highlight';
  }
  else if (currentWord.startsWith(typedValue)) {
    // currently correct
    typedValueElement.className = '';
  }
  else {
    // error state
    typedValueElement.className = 'error';
  }
});